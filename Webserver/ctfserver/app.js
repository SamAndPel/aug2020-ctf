// Initial program setup
const nunjucks = require("nunjucks");
const cookieParser = require('cookie-parser');
const crypto = require('crypto')
const fs = require('fs');

const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = 25341;

app.use(express.static(__dirname + "/static/"));
app.use(cookieParser());
nunjucks.configure(__dirname + "/templates/", {
    autoescape: true,
    express: app
});

// Read flag hash table into memory
const flagsraw = fs.readFileSync(__dirname + "/flags.json");
const flags = JSON.parse(flagsraw);
console.log("[+] Read flag hashes into memory");


// FLAG VERIFICATION API ------------------------------

// Function calculates SHA-256 hash of input text
function getsha256(input) {
    return crypto.createHash('sha256').update(input).digest('hex');
};

// Function returns bool if flag is valid or not
function verifyflag(flag) {
    var hash = getsha256(flag);
    return flags.includes(hash);
    // return Math.random() >= 0.5; // Test line - returns random bool
}

io.on("connection", socket => {
    // On incoming flag to verify
    socket.on("verification-input", flag => {
        console.log("[+] Flag to verify recieved: " + flag);
        io.emit("verification-output", {
            flag: flag,
            valid: verifyflag(flag),
        });
    });
});

// ROUTES ----------------------------------------

app.get("/", (req, res) => {
    res.cookie("CookieFlag", "Flag{Go to twitter}");
    return res.render("home.html.njk");
});

app.get("/checkflag", (req, res) => {
    return res.render("checkflag.html.njk");
});

app.get("/jellyfish", (req, res) => {
    return res.send("Flag{}");
});


// 404 route - must be last so it works as a catch-all
app.get('*', (req, res) => {
    return res.redirect("/");
});


http.listen(PORT, () => {
    console.log(`[+] Listening on port ${PORT}`);
});
