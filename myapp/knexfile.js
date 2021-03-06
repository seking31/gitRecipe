require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/recipe_db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
