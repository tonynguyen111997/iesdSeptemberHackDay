const axios = require("axios");
const authController = require("./controller");

module.exports = app => {
  app.post("/api/register", authController.register);

  app.post("/api/user/repo", (req, res) => {
    const { username } = req.body;
    console.log("TEST");

    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then(response => {
        // res.json(response.data.language);
        return response.data.map(repo => {
          const project = {
            repoName: repo.name,
            topLanguage: repo.language
          };
          console.log({
            repoName: repo.name,
            repoLanguage: repo.language
          });
          return project;
        });
      })
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        res.send(err);
      });
  });

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

  // app.post("/oauth", (req, res) => {
  //   const requestToken = req.query.code;

  // })
};
