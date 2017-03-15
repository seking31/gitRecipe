const environment = process.env.NODE_ENV || 'development';
//if run localy it will be development
//herku will change to production

const config = require('./knexfile')[environment];


const knex = require('knex')
//returns a function

module.exports = knex(config);
//pass config to the function
