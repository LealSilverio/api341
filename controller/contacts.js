const database = require('../db/connection');
const { ObjectId } = require('mongodb');

const contactsController = {};

contactsController.getData = async (req, res) => {
    try{
        const contacts = await database.getDB().db('contacts').collection('users').find({});
        contacts.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
            });
    } catch(err) {
        console.error('Error getting data:', err);
    }
}

contactsController.getByID = async (req, res) => {
    const { id } = req.params
    const userId = ObjectId.createFromHexString(id);
    const contacts = await database.getDB().db('contacts').collection('users').find({ _id: userId });
    contacts.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
}

module.exports = contactsController;