import bcrypt from 'bcrypt';
import User from './user.js';

const create = async () => {
  const username = 'zhanglinghe';
  const email = 'zhanglinghe@gmail.com';
  const password = bcrypt.hashSync('secret', 8);

  const user = await User.create({
    username,
    email,
    password,
  });

  console.log(user);
};

const read = async () => {
  const users = await User.findAll();
  console.log(users);
};

const update = async () => {
  const username = 'sabrinazhuang';
  const email = 'sabrinazhuang@gmail.com';
  const password = bcrypt.hashSync('secret', 8);

  const user = await User.update(
    {
      username,
      email,
      password,
    },
    { where: { id: 2 } }
  );
  console.log(user);
};

const deleteData = async () => {
  const user = await User.destroy({ where: { id: 2 } });
};

// create();
// read()
// update()
deleteData()
