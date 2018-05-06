let languageObject = require("../resource/json/language.json");
// let currentLanguage = require('electron').app.getLocale();

function toLocalize(key)
{
    var currentLanguage = 'en';

    for (var i = 0; i < languageObject.length; i++)
    {
        var elem = languageObject[i];
        console.log(elem);
        if (elem.id == key)
        {
            switch(currentLanguage)
            {
                case 'ko':
                    console.log(elem.korean);
                    return elem.korean;
                case 'ja':
                    console.log(elem.japanese);
                    return elem.japanese;
                default:
                    console.log(elem.english);
                    return elem.english;
            }
        }
    }
}

module.exports =
{
    LanguageObject : languageObject,
    ToLocalize : toLocalize,
};