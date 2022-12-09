import { Sequelize, DataTypes } from 'sequelize';
import fs from 'fs';

// setup a new database
export const sequelize = new Sequelize('database', '', '', {
  dialect: 'sqlite',
  storage: '.data/database.sqlite',
  logging: false,
});

await sequelize.query(`
  drop table if exists total_sales;
  drop table if exists phones;`);

const total_sales = sequelize.define(
  'total_sales',
  {
    model_id: DataTypes.INTEGER,
    revenue: DataTypes.DECIMAL,
    units: DataTypes.DECIMAL,
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

const phones = sequelize.define(
  'phones',
  {
    model_id: DataTypes.INTEGER,
    model_name: DataTypes.STRING,
    brand: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    country: DataTypes.STRING,
    period: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);
await phones.sync();
await total_sales.sync();

const initSql = fs.readFileSync('db/insert.sql').toString();

await sequelize.query(initSql);
// const [result] = await sequelize.query('select * from total_sales');
// console.log(result);
