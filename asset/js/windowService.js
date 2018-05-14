const Electron = require('./electronService').Electron;

let mainWindow;
let mainPage = '../html/index.html';

function createMainWindow () 
{   
  var path = require('path');
  var url = require('url');

  // Create the browser window.
  mainWindow = new Electron.BrowserWindow(
  {
    width: 800, 
    height: 600,
    titleBarStyle: 'hidden',
    backgroundColor: "white",
  });

  var urlFormat = url.format(
  {
    pathname : path.join(__dirname, mainPage),
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