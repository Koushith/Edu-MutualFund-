import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User koushith',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    gender: 'male',
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    gender: 'male',
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
    gender: 'female',
  },
];

export default users;
