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

const authenticateToken = (token) => {
  if (!token) {
    const message = 'Token not found';
    const status = 401;
    return { status, message };
  }
  try {
    const validateToken = jwt.verify(token, JWT_SECRET);

    return validateToken;
  } catch (e) {
    const status = 401;
    const message = 'Expired or invalid token';
    const error = { status, message };
    throw error;
  }
};

module.exports = {
  generateToken,
  authenticateToken,
};