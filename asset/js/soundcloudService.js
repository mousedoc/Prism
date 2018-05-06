const soundcloud = require('soundcloud');

function initialize(redirectUri = null)
{
    soundcloud.initialize(
    {
        client_id: 'YOUR_CLIENT_ID',
        redirect_uri: 'http://example.com/callback'
    });
      
    console.log("tlqkf");
}

module.exports =
{
    Soundcloud : soundcloud,
    Initialize : initialize,
};