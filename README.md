# transformer.us-city-to-us-zipcode

[Transformer](http://github.com/jbenet/transformer) conversion: us-city to us-zipcode

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Commandline

```
> echo 'Carlsbad, CA' | transform us-city us-zipcode
92018
```

### Javascript

```js
var transformer = require('dat-transformer');
var tUsCityToUsZipcode = transformer('us-city', 'us-zipcode');
tUsCityToUsZipcode('Carlsbad, CA'); // '92018'
```
