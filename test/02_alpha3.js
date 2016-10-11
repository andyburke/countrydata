'use strict';

const countrydata = require( '../index.js' );

const test = require( 'tape' );

test( 'get by alpha3', t => {
    countrydata.all.forEach( country => {
        const found_country = countrydata.alpha3[ country.iso3166.alpha3 ];
        t.deepEqual( found_country, country, `${ country.iso3166.alpha3 }: correct` );
    } );
    t.end();
} );