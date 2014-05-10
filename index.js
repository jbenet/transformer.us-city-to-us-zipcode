var transformer = require('dat-transformer');
var tUsCity = transformer('us-city');
var tUsZipcode = transformer('us-zipcode');
// require any other modules you may need here.
var zipdb = require('zippity-do-dah');

module.exports = transformer.Conversion(tUsCity, tUsZipcode, convert);

function convert(city) {
  var parts = city.split(',');
  if (!parts.length == 2)
    throw new Error('City with invalid format.')
  var r = zipdb.citystate(parts[0].trim(), parts[1].trim());
  return r.zipcode;
}
