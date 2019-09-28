const authController = require("./controller");
const axios = require("axios");

module.exports = app => {
  app.post("/api/register", authController.register);

  app.post("/api/user/repo", (req, res) => {
    const { username } = req.body;
    console.log("TEST");

    axios.get(`https://api.github.com/users/${username}/repos`)
    .then(response => {
      console.log(response);
      res.json(response.data);
    })
    .catch(err => {
      res.send(err);
    })
  });

  // app.post("/oauth", (req, res) => {
  //   const requestToken = req.query.code;
    
  // })
};
