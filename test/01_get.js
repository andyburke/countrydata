'use strict';

const countrydata = require( '../index.js' );

const test = require( 'tape' );

test( 'exports', t => {
    t.equal( typeof countrydata, 'object', 'exports an object' );
    t.ok( countrydata, 'exports defined value' );
    t.equal( typeof countrydata.get, 'function', 'has get method' );
    t.end();
} );

test( 'get by string', t => {
    const country = countrydata.get( 'USA' );
    t.ok( country, 'got a country' );
    t.ok( country.iso3166, 'has ISO3166 data' );
    t.equal( country.iso3166.alpha3, 'USA', 'got correct country' );
    t.end();
} );

test( 'get by alpha3', t => {
    const country = countrydata.get( {
        alpha3: 'USA'
    } );
    t.ok( country, 'got a country' );
    t.ok( country.iso3166, 'has ISO3166 data' );
    t.equal( country.iso3166.alpha3, 'USA', 'got correct country' );
    t.end();
} );

test( 'get by alpha2', t => {
    const country = countrydata.get( {
        alpha2: 'US'
    } );
    t.ok( country, 'got a country' );
    t.ok( country.iso3166, 'has ISO3166 data' );
    t.equal( country.iso3166.alpha2, 'US', 'got correct country' );
    t.end();
} );

test( 'get by numeric', t => {
    const country = countrydata.get( {
        numeric: 840
    } );
    t.ok( country, 'got a country' );
    t.ok( country.iso3166, 'has ISO3166 data' );
    t.equal( country.iso3166.numeric, 840, 'got correct country' );
    t.end();
} );

test( 'get by custom test', t => {
    const country = countrydata.get( {
        test: ( country ) => {
            return country.name.en && country.name.en === 'United States';
        }
    } );
    t.ok( country, 'got a country' );
    t.ok( country.name, 'has name data' );
    t.equal( country.name.en, 'United States', 'got correct country' );
    t.end();
} );