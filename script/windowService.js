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
    pathname : path.join(__dirname, 'html/index.html'),
    protocol : 'file',
    slashes : true
  });
  mainWindow.loadURL(urlFormat);

  // Emitted when the window is closed.
  mainWindow.on('closed', function () 
  {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  });
}

module.exports = 
{
  MainWindow : mainWindow,
  CreateMainWindow : createMainWindow,
};