const uuid = require('uuid');
const id = uuid.v4()

const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve('./db/contacts.json');

// console.log(contactsPath);

async function listContacts() {
    try {
        const contactsData = await fs.readFile(contactsPath, 'utf8');
        console.log(contactsData)
    } catch (error) {
        console.error(error);
    }
}

async function getContactById(contactId) {
    try {
        const contactsData = await fs.readFile(contactsPath, 'utf8');
        const contactById = JSON.parse(contactsData).find(contact => Number(contact.id) === contactId);
        console.log(contactById);
    } catch (error) {
        console.error(error);
    }
}

async function removeContact(contactId) {
    try {
        const contactsData = await fs.readFile(contactsPath, 'utf8');
        const contactById = JSON.parse(contactsData).filter(contact => Number(contact.id) !== contactId);
        console.log(contactById);
    } catch (error) {
        console.error(error);
    }
}

async function addContact(name, email, phone) {
    try {
        const contactsData = await fs.readFile(contactsPath, 'utf8');
        const newContact = {id, name, email, phone};
        const newContactsArray = JSON.stringify([...JSON.parse(contactsData), newContact]);
        console.log(JSON.parse(newContactsArray));
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}