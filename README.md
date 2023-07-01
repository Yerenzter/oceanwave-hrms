# OceanWave Theme HRMS
Free and open-source human resource management system with interactive and minimalistic GUI.

## You can use this copy for:
- Personal
- School
- Commercial
- Enterprise
- Goverments

## Implementations
- NodeJS
- ExpressJS
- JSON-Server
- LowDB
- SliderJS (*)
- chartJS
- AJAX
- Material Icons

## Usage

------

## For Linux
**Tools:** Any Linux terminal in to your desktop 

**Commands**:

**Update, Install NodeJS & Git package**

**Debian/Ubuntu and derivatives**
```
sudo apt install git nodejs
```

**Arch and derivatives**
```
sudo pacman -S git nodejs
```

**Fedora and derivatives**
```
sudo dnf install git nodejs
```

**Alpine**
```
sudo apk install git nodejs
```
------

### For Windows
**Tools:** Command Prompt or PowerShell

**Commands**
**Install Git**
```
winget install Git.Git
```

------

### For Android
**Tools:** Termux

**Commands**
**Install Git & NodeJS**
```
pkg install git nodejs
```

------

**After you install all the packages clone OceanWave repository from GitHub**
**Clone the repository**
``` 
sudo git clone https://github.com/Yerenzter/oceanwave-hrms
```
**Locate the oceanwave-hrms directory**
```
cd oceanwave-hrms
```
**Initialize NodeJS project & install ExpressJS, JSON-Server & LowDB**
```
npm init -y && npm install -g express json-server lowdb
```

**Run server.js file using this command**
```
node server.js
```

**Go to browser and type this address in URL bar**
```
https://127.0.0.1:1024
```