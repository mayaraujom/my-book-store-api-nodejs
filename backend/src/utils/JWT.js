const jwt = require('jsonwebtoken');

const JWT_SECRET = 'osegredosupersecreto';

const generateToken = ({ cpf, nome, email }) => {
  const payload = {
    cpf,
    nome,
    email,
  };

  const jwtConfig = {
    expiresIn: '30m',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);

  return token;
};

const authenticateToken = (token, res) => {
  try {
    const validateToken = jwt.verify(token, JWT_SECRET);
    return validateToken;
  } catch (e) {
    throw { e };
  }
};

module.exports = {
  generateToken,
  authenticateToken,
};