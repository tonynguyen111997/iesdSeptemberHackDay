const authController = require("./controller");
const axios = require("axios");

module.exports = app => {
  app.post("/api/register", authController.register);

  app.post("/api/user/repo", (req, res) => {
    const { username } = req.body;
    console.log("TEST");

    axios.get(`https://api.github.com//repos/${username}/portfolio/languages`)
    .then(response => {
      res.json(response);
    });
  })

  // app.post("/oauth", (req, res) => {
  //   const requestToken = req.query.code;
    
  // })
};
