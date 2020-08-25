'use strict';

const countrydata = require( '../index.js' );

const test = require( 'tape' );

test( 'currencies', ( t ) => {
	countrydata.all().forEach( ( country ) => {
		t.test( country?.name?.en, ( _t ) => {
			_t.ok( Array.isArray( country?.currencies ), 'has currencies array' );
			const all_currencies_are_objects = country?.currencies?.reduce( ( _is_object, currency ) => ( _is_object && typeof currency === 'object' ), true );
			_t.ok( all_currencies_are_objects, 'currencies are objects' );
			_t.end();
		} );
	} );
	t.end();
} );