// Default width height
let width = 800;
let height = 600;

// Title bar setting
let titleBarStyle = 'hidden';

// Background color
let backgroundColor = 'white';

function getProperty()
{
  return 
  {
    width : width
    height : height
    titleBarStyle : titleBarStyle
    backgroundColor : backgroundColor
  };
}

module.exports = 
{
  Width : width,
  Height : height,
  TitleBarStyle : titleBarStyle,
  BackgroundColor : backgroundColor,

  GetProperty : getProperty,
};