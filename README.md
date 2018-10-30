# react-electron-workshop

This repo contains a [react](https://reactjs.org/) [electron](https://electronjs.org/) sample app that we used for a workshop on building react desktop apps with electron. It is a simple app to view photos stored locally on your computer. We use [typescript]( https://www.typescriptlang.org/) because things normally work out better that way.

## To Use
To clone and run this repository, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

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

For development we use [vscode](https://code.visualstudio.com/), [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) and [electron-fiddle](https://github.com/electron/fiddle).

### Creating hello world with react, typescript and electron

 * create empty folder: ```mkdir react-photo-viewer``` 
 * go into the folder: ```cd react-photo-viewer``` 
 * Initialize npm: ```npm init```
 * Install electron: ```npm install --save-dev electron```
 * Install react: ```npm install --save react react-dom```
 * Install typescript: ```npm install --save-dev typescript @types/react @types/react-dom```
 * Create [.gitignore](.gitignore) (optional) 
 * Create [tsconfig.json](tsconfig.json)
 * Create src folder: ```mkdir src```
 * Create renderer folder: ```mkdir src/renderer```
 * In the src\renderer folder
 * Create [main.ts](src/renderer/main.ts)
 * Create [preload.ts](src/renderer/preload.ts)
 * Create [index.html](src/renderer/index.html)
 * Create [index.tsx](src/renderer/index.tsx) (hello world version)
 * Add build steps to: [package.json](package.json) and update main ```"main": "src/main.js",```
 * Try to build: ```npm run build```
 * Try to run: ```npm start```
 * :bulb: Try to inspect and debug the render process using developer-tools: <kbd>control</kbd>+<kbd>shift</kbd>+<kbd>I</kbd>
 * :bulb: Try to inspect and [debug the main process](https://electronjs.org/docs/tutorial/debugging-main-process) using chrome://inspect in a seperate chrome instance.
 
 ### Add photo viewing features
 
 * Upgrade [index.tsx](src/renderer/index.tsx) with basic viewer
 * Add [index.css](src/renderer/index.css) for styles
 * :bulb: Note the use of ```remote.app.getPath('pictures')``` and ```fs.readdirSync``` electron api's
 * Install exif module ```npm install --save exif```
 * Upgrade [index.tsx](src/renderer/index.tsx) with context menu and thumbnail optimizing
 * :bulb: Note the use of ```remote.Menu.buildFromTemplate``` electron menu api.
 
### Packaging the app
 * An app package can be made by just [copying folders](https://electronjs.org/docs/tutorial/application-distribution)
 * But there are packages [packages to do this](https://github.com/electron-userland/electron-packager): ```npm install -save-dev electron-packager```
 * Create the packaged app: ```node_modules\.bin\electron-packager.cmd ./```
 * :bulb: Review the created packaged app folder. Run the packaged app, note it no native menus.
 
 ### Creating an installer on Windows
 * Install a package to [create an installer](https://github.com/felixrieseberg/electron-wix-msi): ```npm i --save-dev electron-wix-msi```
 * Install [wix toolset](http://wixtoolset.org/)
 * Add wix to the path  ```C:\Program Files (x86)\WiX Toolset v3.11\bin;```
 * Create (make-msi.js)[make-msi.js] with script to create an insaller
 * Build the installer: ```node make-msi.js```
 * :bulb: Install and run
 
