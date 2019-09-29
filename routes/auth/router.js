const authController = require("./controller");

module.exports = app => {
  app.post("/api/register", authController.register);

  app.post("/api/user/repo", authController.getGitHubRepos);

  app.post("/dashboard", authController.getGitHubUser);

<<<<<<< HEAD
  app.post("/dashboard", (req, res) => {
    const { username } = req.body;
    axios.get(`https://api.github.com/users/${username}`).then(response => {
      const { login, name, location, bio, avatar_url } = response.data;
      const data = {
        login,
        name,
        location,
        bio,
        avatar_url
      };
      res.json(data);
    });
  });
=======
  app.get("/api/user/:username", authController.getUserInfo);
>>>>>>> c6b480c475dd5092f4a9f872ea8ff576a632ec1a

  app.get("/api/email/:userEmail", authController.getUserInfoEmail);
};
