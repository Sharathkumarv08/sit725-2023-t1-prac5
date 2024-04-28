// database.js

const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb://localhost:27017/SIT725_dbconnect';
const client = new MongoClient(uri, { serverApi: ServerApiVersion.latest });
let database;

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        database = client.db();
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

module.exports = { connectToDatabase, getDatabase };
