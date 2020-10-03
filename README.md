# aug2020-ctf
A CTF built by me and a few others in August 2020

## Setup
Install Node.JS or spin up a docker container to run the Node server. This functions as a starting point for the CTF, as well as a flag-checker. If hosting on a VM, the machine should be set to run the server at startup.

Set up the SSH credentials as required (enigma:batman), and add the required files to the target machine (/etc/motd, and ~/.bash_history)

Add the steganography/zipped files in a sensible location (~/ reccomended)

## Walkthrough
### Flag 1 - Nmap scan and connect to HTTP server
1.	Run an Nmap scan on the host’s network
2.	Find an open http port and web services running on port 25341
3.	Open [victim machine IP]:25341 in a browser
4.	Get flag Flag{SSBhbSBub3QgYS4uLiBQRVJNSVNTSU9OIERFTklFRA==}
5.	Solve from base 64 to get - I am not a... PERMISSION DENIED

### Flag 2 - Robots.txt
1.	Go to /robots.txt
2.	Get flag - Flag{R3JhbmRtYSdzIGJlZW4gYmFraW5n}
3.	Solve from base64 to get - Grandma’s been baking

### Flag 3 - Cookies
1.	View cookies in the webpage (dev tools -> storage -> cookieflag)
2.	Decode ‘CookieFlag’ from Hex to text
3.	Get flag - flag{QHIxZGRsM19tM190aDFz}
4.	Solve from base64 to get - @r1ddl3_m3_th1s

### Flag 4 - Twitter
1.	Go to the @ from last flag on twitter
2.	Avoid two false leads for decoding rot3 and hex
3.	Riddle on Twitter’s answer is ‘jellyfish’
4.	Go to /jellyfish on the webserver
5.	Get flag - Flag{U2VuZCBTb21lIEhlcm9lcw==}
6.	Solve from base 64 to get - Send Some Heroes

### Flag 5 - SSH connection
1.	Establish SSH connection with credentials enigma;batman
    - enigma – for Edward Nigma/Nygma (name of The Riddler)
    - batman – Riddler's enemy, and in rockyou.txt
2.	Message of the day on connection to SSH has another flag
3.	Get flag - Flag{VGhvc2Ugd2hvIGNhbm5vdCBsZWFybiBmcm9tIGhpc3RvcnkgYXJlIGRvb21lZCB0byByZXBlYXQgaXQ=}
4.	Solve from base 64 to get - Those who cannot learn from history are doomed to repeat it

### Flag 6 - Bash history
1.	Access the bash history (.bash_history file or up arrow)
2.	Get flag - Flag{Q2hlY2sgb3V0IG15IG5ldyBjYW5lIQ==}
3.	Solve from base64 to get – Check out my new cane!

### Flag 7 - Image steganography
1.	Open image of cane (lean_on_me.jpg) in hex editor
2.	Correct magic bytes of .jpeg file (should be ÿØÿà)
3.	Open file as image
4.	Get flag - Flag{YSBmaWxlcyBiZWVuIGRlZmlsZWQgYW5kIGhhcyBhIHZlaWwgZG9udCB0YWtlIGEgd2hpbGUgb3IgeW91bGwgZmFpbA==}
5.	Solve from base 64 to get - a files been defiled and has a veil dont take a while or youll fail

### Flag 8 - File analysis
1.	Rename pdf file (2020_expense_report.pdf) extension to jpg
2.	Open jpg in HxD and search for ‘flag’
3.	Get flag - Flag{SSBob3BlIHlvdSBhcmVu4oCZdCBnb2luZyB0byBkbyB0aGlzIGJ5IGhhbmQuLi4=}
4.	Solve from base64 to get - I hope you aren’t going to do this by hand...

### Flag 9 - Zipping challenge
1.	Unzip file 10,000 times, using a .py or .sh script is recommended
2.	Get flag - Flag{WW91IGNoZWF0ZWQgaG1waC4uLg==}
3.	Solve from base64 to get - You cheated hmph...
