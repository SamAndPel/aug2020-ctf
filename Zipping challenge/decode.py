import zipfile
import os

def unzip(index):
    with zipfile.ZipFile(str(index) + ".zip", "r") as zip:
        zip.extractall()
    os.remove(str(index) + ".zip")

def main():
    layers = input("Number of layers: ")
    for i in range(int(layers), -1, -1):
        unzip(i)

if __name__ == "__main__":
    main()