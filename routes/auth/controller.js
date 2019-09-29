const boom = require("@hapi/boom");
const axios = require("axios");
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

const getGitHubUser = (req, res, next) => {
  const { username } = req.body;
  axios.get(`https://api.github.com/users/${username}`).then(response => {
    const { login, name, location, bio } = response.data;
    const data = {
      login,
      name,
      location,
      bio
    };
    res.json(data);
  });
};

const getGitHubRepos = (req, res, next) => {
  const { username } = req.body;

  axios
    .get(`https://api.github.com/users/${username}/repos`)
    .then(response => {
      // res.json(response.data.language);
      return response.data.map(repo => {
        const project = {
          repoName: repo.name,
          topLanguage: repo.language
        };
        return project;
      });
    })
    .then(response => {
      console.log("username", username);
      User.findOne({ githubUsername: username })
        .then(user => {
          console.log("USER", user);
          if (!user) res.send("No user found");

          user.Repos = response;
          user.save();
          res.send(response);
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      res.send(err);
    });
};

const getUserInfo = (req, res, next) => {
  const { username } = req.params;
  User.findOne({ githubUsername: username }).then(user => {
    const { name, Repos, email, githubUsername } = user;
    res.json({
      name,
      Repos,
      email,
      githubUsername
    });
  });
};

const getUserInfoEmail = (req, res, next) => {
  const { userEmail } = req.params;
  User.findOne({ email: userEmail }).then(user => {
    const { name, Repos, email, githubUsername } = user;
    res.json({
      name,
      Repos,
      email,
      githubUsername
    });
  });
};

module.exports = {
  register,
  getGitHubUser,
  getGitHubRepos,
  getUserInfo,
  getUserInfoEmail
};
