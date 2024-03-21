const express = require('express');
const router = express.Router();
const countries = require('../services/getAllCountries.service')
const countryInfo = require('../services/getCountryInfo.service')


router.get('/', countries.getAllCountries);
router.get('/info', countryInfo.getCountryInfo);
module.exports = router;

