var Conversion = require('transformer-conversion');
var tUsCity = require('transformer.us-city');
var tUsZipcode = require('transformer.us-zipcode');
// require any other modules you may need here.
var zipdb = require('zippity-do-dah');

module.exports = Conversion(tUsCity, tUsZipcode, convert);

function convert(city) {
  var parts = city.split(',');
  if (!parts.length == 2)
    throw new Error('City with invalid format.')
  var r = zipdb.citystate(parts[0].trim(), parts[1].trim());
  return r.zipcode;
}
