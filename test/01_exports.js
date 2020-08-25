'use strict';

const countrydata = require( '../index.js' );

const test = require( 'tape' );

test( 'exports', ( t ) => {
	t.equal( typeof countrydata, 'object', 'exports an object' );
	t.ok( countrydata, 'exports defined value' );
	t.equal( typeof countrydata.get, 'function', 'exports get() to get a country' );
	t.equal( typeof countrydata.all, 'function', 'exports all() to get all countries' );
	t.end();
} );
