# react-electron-workshop

This repo contains a react electron sample app that we used for a workshop on building react desktop apps with electron. It is a simple app to view photos stored locally on your computer. 

## To Use
To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```
# Clone this repository
git clone https://github.com/electron/react-electron-workshop
# Go into the repository
cd react-electron-workshop
# Install dependencies
npm install
# Build
npm run build
# Run the app
npm start
```

## To develop

For development we use [vscode](https://code.visualstudio.com/) [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/)

 * create empty folder: ```mkdir react-photo-viewer``` 
 * go into the folder: ```cd react-photo-viewer``` 
 * npm init
 * npm install --save electron 
 * npm install --save react react-dom
 * npm install --save-dev typescript @types/react @types/react-dom 
 * Create git ignore (optional) (XXXXXXXXXX)
 * Create tsconfig.json  (XXXXX)
 * Create src folder
 * Create renderer folder
 * Create main.ts (XXXXX)
 * Create Preload (xxxx)
 * Create Index.html (xxxx)
 * CreateIndex.tsx (xxxx) hello world version
 * Add build steps to pkg.json + update main  "main": "src/main.js",
 * Command line: npm run build
 * Command line: npm start
 * Talk about rp debugging
 * Talk about chrome://inspect  blah
 * Upgrade index.html to basic viewer (xxxx)
 * Create css (xxxx)
 * Talk about loading the path
 * npm install --save exif
 * Upgrade index.tsx to context menu and optimizing
 * Talk about menus 
 * Making an app by copying folders example (https://electronjs.org/docs/tutorial/application-distribution)
 * npm install -save-dev electron-packager
 * node_modules\.bin\electron-packager.cmd ./
 * npm i --save-dev electron-wix-msi
 * Install wix
 * Add wix to path
 * Create make-msi.js (xxxxxx)
