const axios = require('axios');
const Character = require('../models/characterModel');

exports.getNarutoData = async (req, res) => {
    try {
        res.send('Hola Mundo');
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Error');
    }
};

exports.getCharacters = async (req, res) => {
    try {
        const response = await axios.get('https://narutodb.xyz/api/character');
        const filteredData = response.data.characters.map(character => new Character(
            character.id, 
            character.name, 
            Array.isArray(character.jutsu) ? character.jutsu : []
        ));
        res.render('index', { data: filteredData });
    } catch (error) {
        console.error('Error fetching data from NarutoDB API:', error.message);
        res.status(500).send('Error fetching data from NarutoDB API');
    }
};

exports.getCharacterById = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`https://narutodb.xyz/api/character/${id}`);
        const character = response.data;
        const personaje = new Character(
            character.id, 
            character.name, 
            Array.isArray(character.jutsu) ? character.jutsu : []
        );
        res.render('index', { data: [personaje] });
    } catch (error) {
        console.error('Error fetching data from NarutoDB API:', error.message);
        res.status(500).send('Error fetching data from NarutoDB API');
    }
};