const authController = require("./controller");

module.exports = app => {
  app.post("/api/register", authController.register);

  app.post("/api/user/repo", authController.getGitHubRepos);

  app.post("/dashboard", authController.getGitHubUser);

  app.get("/api/user/:username", authController.getUserInfo);

  app.get("/api/email/:userEmail", authController.getUserInfoEmail);
};
