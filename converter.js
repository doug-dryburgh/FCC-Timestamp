var moment = require("moment");

module.exports = function (input) {
    
    //UNIX
    if (!isNaN(input)) {
        return {
            unix: input,
            natural: moment.unix(input).format("MMMM D, YYYY")
        };
    }
    else {
        var date = Date.parse(input);
        //GIBBERISH
        if (isNaN(date)) {
            return {
                unix: "null"
                , natural: "null"
            };
        }
        //NATURAL
        else {
            return {
                unix: moment(date).unix(),
                natural: moment(date).format("MMMM D, YYYY")
            };
        }
    }
};