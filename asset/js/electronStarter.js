const Electron = require('./electronService.js');
const Windows = require('./windowService.js');

// Ready
Electron.App.on('ready', Windows.CreateMainWindow);

// Window all closed
Electron.App.on('window-all-closed', function ()
{
  if (process.platform !== 'darwin') 
  {
    Electron.App.quit();
  }
});

// Activated
Electron.App.on('activate', function ()
{
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (Windows.MainWindow === null) 
  {
    Windows.CreateMainWindow();
  }
});

// Closed
Electron.App.on('closed', function ()
{
  Windows.MainWindow = null;
});
