import { Sequelize } from 'sequelize';

const koneksi = new Sequelize('sparking', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
});

export default koneksi;
