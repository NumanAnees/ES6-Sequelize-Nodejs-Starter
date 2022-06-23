require("dotenv").config();

const development = {
  database: "psql_dev",
  dialect: "postgres",
  host: "127.0.0.1",
};
const production = {
  database: "psql_prod",
  dialect: "postgres",
  host: "127.0.0.1",
};

module.exports = {
  development,
  production,
};
