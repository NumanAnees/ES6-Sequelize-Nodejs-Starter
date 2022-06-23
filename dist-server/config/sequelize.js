"use strict";

require("dotenv").config();

var development = {
  database: "psql_dev",
  dialect: "postgres",
  host: "127.0.0.1"
};
var production = {
  database: "psql_prod",
  dialect: "postgres",
  host: "127.0.0.1"
};
module.exports = {
  development: development,
  production: production
};