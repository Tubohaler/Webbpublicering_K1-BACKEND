const knexConfig = require("../data/knexfile");
const config = knexConfig[process.env.NODE_ENV];
const knex = require("knex")(config);

module.exports = knex;
