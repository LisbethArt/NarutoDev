const axios = require('axios');
const Clan = require('../models/clanModel');

exports.getNarutoData = async (req, res) => {
    try {
        res.send('Hola Mundo');
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Error');
    }
};

exports.getClans = async (req, res) => {
    try {
        const response = await axios.get('https://narutodb.xyz/api/clan');
        const filteredData = response.data.clans.map(clan => new Clan(
            clan.id, 
            clan.name
        ));
        res.render('clan', { data: filteredData });
    } catch (error) {
        console.error('Error fetching data from NarutoDB API:', error.message);
        res.status(500).send('Error fetching data from NarutoDB API');
    }
};

exports.getClanById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://narutodb.xyz/api/clan/${id}`);
        const clan = response.data;
        const clanN = new Clan(
            clan.id, 
            clan.name
        );
        res.render('clan', { data: [clanN] });
    } catch (error) {
        console.error('Error fetching data from NarutoDB API:', error.message);
        res.status(500).send('Error fetching data from NarutoDB API');
    }
};