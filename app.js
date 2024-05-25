import bcrypt from 'bcrypt';
import User from './user.js';

const create = async () => {
  const username = 'shenjuanwil';
  const email = 'shenjuanwil@gmail.com';
  const password = bcrypt.hashSync('secret', 8);

  const user = await User.create({
    username,
    email,
    password,
  });

  console.log(user);
};
const read = () => {};
const update = () => {};
const deleteData = () => {};

create();
