'use strict';

const data = require( './countrydata.json' );

module.exports = {
	all: data,

	alpha3: data.reduce( ( prev, country ) => {
		prev[ country.iso3166.alpha3 ] = country;
		return prev;
	}, {} ),

	alpha2: data.reduce( ( prev, country ) => {
		prev[ country.iso3166.alpha2 ] = country;
		return prev;
	}, {} ),

	numeric: data.reduce( ( prev, country ) => {
		prev[ country.iso3166.numeric ] = country;
		return prev;
	}, {} )
};