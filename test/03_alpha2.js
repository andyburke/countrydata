'use strict';

const countrydata = require( '../index.js' );

const test = require( 'tape' );

test( 'get by alpha2', ( t ) => {
	countrydata.all().forEach( ( country ) => {
		t.test( country && country.name && country.name.en, ( _t ) => {
			const found_country = countrydata.get( country.iso3166.alpha2 );
			_t.deepEqual( found_country, country, `${ country.iso3166.alpha2 }: correct` );
			_t.end();
		} );
	} );
	t.end();
} );
