const Electron = require('./Electron.js');
const Windows = require('./Windows.js');

// READY
Electron.App.on('ready', Windows.CreateMainWindow);

// WINDOW ALL CLOSED
Electron.App.on('window-all-closed', function ()
{
  if (process.platform !== 'darwin') 
  {
    Electron.App.quit();
  }
})

// ACTIVATE
Electron.App.on('activate', function ()
{
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (Windows.MainWindow === null) 
  {
    Windows.CreateMainWindow();
  }
});
