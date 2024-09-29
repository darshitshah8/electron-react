const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let mainWindow;
let createWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Load home screen (for to-do list)
  mainWindow.loadFile("index.html");
}

function createReactWindow() {
  createWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"), // Preload for IPC communication
    },
  });

  // Load the React app running on localhost
  createWindow.loadURL("http://localhost:3000");
}

app.whenReady().then(() => {
  createMainWindow();

  // Handle when Electron app is activated
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });

  // Handle IPC for syncing text from React to Electron's home screen
  ipcMain.on("sync-text", (event, text) => {
    console.log(`Received text from React: ${text}`);
    // Send text to the main window (home screen)
    mainWindow.webContents.send("add-text", text);
  });

  ipcMain.on("open-create-window", () => {
    createReactWindow();
  });
});

// Close all windows when app quits
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
