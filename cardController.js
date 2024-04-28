// controllers/cardController.js
const { collection } = require('../model/cardModel');

async function postCard(req, res) {
    try {
        await collection.insertOne(req.body);
        res.status(201).json({ message: 'Card added successfully' });
    } catch (err) {
        console.error('Error adding card:', err);
        res.status(500).json({ error: 'Failed to add card' });
    }
}

async function getAllCards(req, res) {
    try {
        const cards = await collection.find({}).toArray();
        res.json(cards);
    } catch (err) {
        console.error('Error fetching cards:', err);
        res.status(500).json({ error: 'Failed to fetch cards' });
    }
}

module.exports = { postCard, getAllCards };
