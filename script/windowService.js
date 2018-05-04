const Electron = require('./electronService');

let mainWindow;

function createMainWindow () 
{
  var path = require('path');
  var url = require('url');

  // Create the browser window.
  mainWindow = new Electron.BrowserWindow({width: 800, height: 600});
  var urlFormat = url.format(
  {
    pathname : path.join(__dirname, '../html/index.html'),
    protocol : 'file',
    slashes : true
  });
  mainWindow.loadURL(urlFormat);
}

module.exports = 
{
  MainWindow : mainWindow,
  CreateMainWindow : createMainWindow,
};