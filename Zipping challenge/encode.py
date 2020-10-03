import zipfile 
import os

def create_zip(start_file):
    with zipfile.ZipFile("0.zip", "w") as file:
        file.write(start_file)

def add_to_zip(index):
    prev_file = str(index - 1) + ".zip"
    new_zip = str(index) + ".zip"
    with zipfile.ZipFile(new_zip, "w") as file:
        file.write(prev_file)
    os.remove(prev_file)

def main():
    layers = input("Number of layers: ")
    og_file = input("File for zipping: ")
    create_zip(og_file)
    for i in range(1, int(layers)+1):
        add_to_zip(i)


if __name__ == "__main__":
    main()