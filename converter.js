var moment = require("moment");

module.exports = function(input) {
  return {unix: input, natural: moment.unix(input).format("MMMM D, YYYY")}  
};


/* convert unix to natural via moment: moment.unix(*timestamp*).format(*format*) 

res.json({ unix: req.params.unix, natural: moment.unix(req.params.unix).format("MMMM D, YYYY")});
*/