let languageObject = require("../resource/json/language.json");
let currentLanguage = require('electron').app.getLocale();

function toLocalize(key)
{
    for (var i = 0; i < languageObject.length; i++)
    {
        if (languageObject[i].id == key)
        {
            var elem = languageObject[i];
            switch(currentLanguage)
            {
                case 'ko':
                    return elem.korean;
                case 'ja':
                    return elem.japanese;
                default:
                    return elem.english;
            }
        }
    }
}

module.exports =
{
    LanguageObject : languageObject,
    CurrentLanguage : currentLanguage,
    ToLocalize : toLocalize,
};