const authController = require("./controller");

module.exports = app => {
  app.post("/api/register", authController.register);

  app.post("/api/user/repo", authController.getGitHubRepos);

  app.post("/dashboard", authController.getGitHubUser);

  app.get("/api/:username", authController.getUserInfo);
};
