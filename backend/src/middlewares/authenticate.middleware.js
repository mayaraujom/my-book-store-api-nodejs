const { authenticateToken } = require('../utils/JWT');

const Authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token não encontrado' });

  try {
    const user = authenticateToken(token, res);
    req.locals = user;
    next();

  } catch (e) {
    return res.status(401).json(e);
  }
};

module.exports = {
  Authenticate,
};