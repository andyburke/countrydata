'use strict';

const countrydata = require( '../index.js' );

const test = require( 'tape' );

test( 'get by numeric', ( t ) => {
	countrydata.all.forEach( ( country ) => {
		const found_country = countrydata.numeric[ country.iso3166.numeric ];
		t.deepEqual( found_country, country, `${ country.iso3166.numeric }: correct` );
	} );
	t.end();
} );