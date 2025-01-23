const { Pool } = require("pg");
const { dbConfig } = require("./config");

const db = new Pool({
  user: dbConfig.user,
  password: dbConfig.password,
  host: dbConfig.host,
  port: dbConfig.port,
  database: dbConfig.database,
});

module.exports = db;
