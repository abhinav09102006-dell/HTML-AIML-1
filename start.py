import subprocess
import sys
import os

def install_requirements():
    print("Installing requirements...")
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])
        print("Requirements installed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Error installing requirements: {e}")
        sys.exit(1)

def start_shield():
    print("Starting shield.py...")
    try:
        # Using sys.executable to ensure we use the same python interpreter
        subprocess.check_call([sys.executable, "shield.py"])
    except subprocess.CalledProcessError as e:
        print(f"Error running shield.py: {e}")
        sys.exit(1)

if __name__ == "__main__":
    if os.path.exists("requirements.txt"):
        install_requirements()
    else:
        print("requirements.txt not found. Skipping installation.")
    
    if os.path.exists("shield.py"):
        start_shield()
    else:
        print("shield.py not found!")
