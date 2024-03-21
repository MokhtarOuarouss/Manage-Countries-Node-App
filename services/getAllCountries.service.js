const axios = require('axios');
require('dotenv').config();

const  getAllCountries = async (req, res) => {
     await axios.get(process.env.API_KEY)
      .then(response => {
        res.render('countries', { countries: response.data});
      })

      .catch(error => {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
      });
  }

  module.exports =  {
    getAllCountries
  }