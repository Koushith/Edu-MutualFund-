import jwt from 'jsonwebtoken';

// refer jwt npm docs

// Todo- place the secret in .env file
const generateToken = (id) => {
  return jwt.sign({ id }, 'abc12345', {
    expiresIn: '30d',
  });
};

export default generateToken;
