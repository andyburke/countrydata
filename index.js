'use strict';

const countries = require( './data/countries.json' );
const currencies = require( './data/currencies.json' );

Object.values( countries ).forEach( ( country ) => {
	country.currencies = country.currencies.map( ( currency_id ) => ( currencies[ currency_id ] ) );
} );

module.exports = {
	get: function( id ) {
		if ( typeof id === 'string' ) {
			if ( id.length === 3 ) {
				return countries[ id ];
			}
			else if ( id.length === 2 ) {
				return this.all().find( ( country ) => ( country.iso3166.alpha2 === id ) );
			}
			else {
				return undefined;
			}
		}
		else if ( typeof id === 'number' ) {
			return this.all().find( ( country ) => ( country.iso3166.numeric === id ) );
		}
		else {
			return undefined;
		}
	},

	all: function() {
		return Object.values( countries );
	}
};