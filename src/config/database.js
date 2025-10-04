import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// konfigurasi DB
const dbConfig = {
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: "mysql",
};

function initSequelize(enableLogging = false) {
  return new Sequelize(dbConfig.name, dbConfig.user, dbConfig.pass, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: enableLogging ? console.log : false,
  });
}

// instance default (logging off)
const sequelize = initSequelize(false);

export { dbConfig, initSequelize, sequelize };
