const Electron = require('./electronService').Electron;
const WindowProperty = require('./windowProperty');

let mainWindow;
let mainPage = '../html/index.html';

function createMainWindow () 
{   
  var path = require('path');
  var url = require('url');

  // Declare
  mainWindow = new Electron.BrowserWindow(require('./windowProperty').GetProperty());

  // Server or local file path
  var uri = process.env.ELECTRON_START_URL || 
            url.format(
            {
              pathname : path.join(__dirname, mainPage),
              protocol : 'file',
              slashes : true
            });

  mainWindow.loadURL(uri);
}

module.exports = 
{
  MainWindow : mainWindow,
  CreateMainWindow : createMainWindow,
};