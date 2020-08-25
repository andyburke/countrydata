'use strict';

const countrydata = require( '../index.js' );

const test = require( 'tape' );

test( 'get by alpha2', ( t ) => {
	countrydata.all.forEach( ( country ) => {
		const found_country = countrydata.alpha2[ country.iso3166.alpha2 ];
		t.deepEqual( found_country, country, `${ country.iso3166.alpha2 }: correct` );
	} );
	t.end();
} );
