## countrydata

A library for getting data about countries.

## Code Example

```javascript
const countrydata = require( 'countrydata' );

// by default, will look up country data by ISO3166 alpha3 code
const usa = countrydata.get( 'USA' );

// you can look up by alpha3 explicity
const usaByAlpha3 = countrydata.get( {
    alpha3: 'USA'
} );

// you can lookup by alpha2
const usaByAlpha3 = countrydata.get( {
    alpha2: 'US'
} );

// you can look up by numeric code
const usaByNumeric = countrydata.get( {
    numeric: 840
} );

// you can write your own finder
const usaByCustom = countrydata.get( {
    test: country => {
        return country.name.en && country.name.en === 'United States';
    }
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