const boom = require("@hapi/boom");
const User = require("../../models/User");
const { genJwt } = require("../../utils/jwt");

const register = (req, res, next) => {
  const { name, email, password, githubUsername } = req.body;

  User.findOne({ email }, async (err, foundUser) => {
    if (err) return next(boom.serverUnavailable("Error finding user."));

    if (foundUser)
      return next(boom.conflict("This email is already in the system."));

    const user = new User({
      email,
      password,
      name,
      githubUsername
    });

    return user.save(error => {
      if (error) return next(boom.serverUnavailable("Error saving user."));

      return res.json({ token: genJwt(user) });
    });
  });
};

module.exports = { register };
