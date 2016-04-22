'use strict';

const data = require( './data.json' );

const getters = {
    _iso3166: ( key, value ) => {
        let result;
        Object.keys( data ).some( code => {
            const country = data[ code ];
            if ( country.iso3166[ key ] === value ) {
                result = country;
                return true;
            }

            return false;
        } );

        return result;
    },

    alpha3: ( alpha3 ) => {
        return data[ alpha3 ];
    },

    alpha2: ( alpha2 ) => {
        return getters._iso3166( 'alpha2', alpha2 );
    },

    numeric: ( numeric ) => {
        return getters._iso3166( 'numeric', numeric );
    },

    test: ( tester ) => {
        let result;
        Object.keys( data ).some( code => {
            const country = data[ code ];
            if ( tester( country ) ) {
                result = country;
                return true;
            }

            return false;
        } );

        return result;
    }
};

module.exports = {
    get: function get( options ) {
        const key = typeof options === 'object' ? Object.keys( options )[ 0 ] : 'alpha3';
        const value = typeof options === 'object' ? options[ key ] : options;
        const getter = getters[ key ];
        return getter( value );
    }
};