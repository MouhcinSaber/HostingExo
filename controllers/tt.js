const FormSchema = require("../models/FormSchema");
const mongoose = require("mongoose");

async function getHeroPage(req, res) {
    try {
        const { name, FavoriteColor, FavoriteClub } = req.body;
        const spectators = await FormSchema.create({ name, FavoriteColor, FavoriteClub });
        res.status(200).send({ title: 'Hero Page', spectators: spectators });
    } catch (error) {
        console.error('Error creating spectator:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = { getHeroPage };