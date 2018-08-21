const axios = require('axios')

exports.getData = (req, res, next) => {

  axios.get('https://gitlab.fleetster.de/api/v4/projects?private_token=' + process.env.API_KEY)
    .then(function (response) {
      console.log(response);
      res.send( 'here')
    })
    .catch(function (error) {
      console.log(error);
    });



}
