import path from 'path'
import { app, BrowserWindow } from 'electron'

function isDev() {
  return process.env.NODE_ENV === 'development'
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })
  if (isDev()) {
    mainWindow.loadURL(`http://127.0.0.1:7001`)
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`)
  }
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
