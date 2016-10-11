## countrydata

A library for getting data about countries.

## Code Example

```javascript
const countrydata = require( 'countrydata' );

// look up country data by ISO3166 alpha3 code
const usa_by_alpha3 = countrydata.alpha3.USA;

// look up country by ISO3166 alpha2
const usa_by_alpha2 = countrydata.alpha2.US;

// look up country by ISO3166 numeric
const usaByNumeric = countrydata.numeric[ 840 ];

// .all is the array of all countries, which you can use for finding/filtering, eg:
const countries_using_usd = countrydata.all.filter( country => {
    return country.iso3166.currency.code === 'USD';
} );

const usa_by_find = countrydata.all.find( country => {
    return country.name.en && country.name.en === 'United States';
} );
```

## Installation

```bash
npm install --save countrydata
```

## Tests

```bash
npm run test
```

## Contributing

Contributions are encouraged and appreciated. To make the process as quick and painless as possible for everyone involved, here's a checklist that will make a pull request easily accepted:

1. Implement your new feature or bugfix
2. Add or update tests to ensure coverage
3. Ensure your code passes jshint according to the .jshintrc
4. Ensure your code is formatted according to the .jsbeautifyrc
5. Submit

## License

MIT