import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let mainWindow: BrowserWindow;
app.once('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'renderer/preload.js')
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
