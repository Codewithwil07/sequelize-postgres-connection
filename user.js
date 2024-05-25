import { DataTypes } from 'sequelize';
import koneksi from './koneksi.js';

const User = koneksi.define(
  'User',
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
  }
);

export default User;
