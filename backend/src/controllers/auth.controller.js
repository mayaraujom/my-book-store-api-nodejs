const authService = require('../services/auth.service');

const Login = async (req, res) => {
  try {
    const token = await authService.Login(req.body);
    return res.status(200).json(token);
  } catch (e) {
    return res.status(e.status).json({ message: e.message });
  }
};

module.exports = {
  Login,
};