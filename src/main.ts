import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow;
app.once('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            preload: path.join(app.getAppPath(), 'src/renderer/preload.js'),
            additionalArguments: ['--renderer-process-type=main-window']
        }
    });
    mainWindow.loadFile('src/renderer/index.html');
    // mainWindow.webContents.openDevTools();

    mainWindow.once('closed', () => {
        mainWindow = undefined;
    });
});

app.once('window-all-closed', () => {
    app.quit();
});
