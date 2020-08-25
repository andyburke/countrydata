'use strict';

const countrydata = require( '../index.js' );

const test = require( 'tape' );

test( 'exports', ( t ) => {
	t.equal( typeof countrydata, 'object', 'exports an object' );
	t.ok( countrydata, 'exports defined value' );
	t.ok( Array.isArray( countrydata.all ), 'has "all" array of countries' );
	t.ok( typeof countrydata.alpha3 === 'object' && Object.keys( countrydata.alpha3 ).length === ( countrydata && countrydata.all && countrydata.all.length ), 'exports alpha3 lookup table' );
	t.ok( typeof countrydata.alpha2 === 'object' && Object.keys( countrydata.alpha2 ).length === ( countrydata && countrydata.all && countrydata.all.length ), 'exports alpha2 lookup table' );
	t.ok( typeof countrydata.numeric === 'object' && Object.keys( countrydata.numeric ).length === ( countrydata && countrydata.all && countrydata.all.length ), 'exports numeric lookup table' );
	t.end();
} );
