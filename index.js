'use strict';

const {app, BrowserWindow} = require('electron')

app.on('ready', () => {
  let win = new BrowserWindow({width: 200, height: 110})
  win.loadURL(`file://${__dirname}/index.html`)
})

app.on('window-all-closed', () => {
  app.quit()
})
