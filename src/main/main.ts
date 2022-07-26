const {app, BrowserWindow} = require('electron');
const path = require("path");

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            worldSafeExecuteJavaScript: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.openDevTools();

    // and load the index.html of the app.
    win.loadFile(path.join(__dirname, 'index.html'));
}


app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})