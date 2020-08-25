'use strict';

const countrydata = require( '../index.js' );

const test = require( 'tape' );

test( 'get by numeric', ( t ) => {
	countrydata.all().forEach( ( country ) => {
		t.test( country?.name?.en, ( _t ) => {
			const found_country = countrydata.get( country.iso3166.numeric );
			_t.deepEqual( found_country, country, `${ country.iso3166.numeric }: correct` );
			_t.end();
		} );
	} );
	t.end();
} );