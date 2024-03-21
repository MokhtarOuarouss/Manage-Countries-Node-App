const axios = require('axios');
require('dotenv').config();

const getCountryInfo = async (req, res) => {
    const countryName = req.query.name;
    try {
        const response = await axios.get(process.env.API_KEY);
        const filteredResult = response.data.filter(country => {
            return country.name.official.toLowerCase().includes(countryName.toLowerCase());
        });
        res.render('countryInfo', { countryInfo: filteredResult[0] });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
}

module.exports = {
    getCountryInfo
}
