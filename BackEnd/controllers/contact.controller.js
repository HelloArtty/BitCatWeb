import Contact from '../models/contact.model.js';

export const testcontact = (req, res) => {
    res.json(
        {
            message: 'Api is work'
        });
}

export const createContact = async (req, res, next) => {
    try {
        const contact = await Contact.create(req.body);
        return res.status(201).json(contact);
    } catch (error) {
        next(error);
    }
};

export const getContact = async (req, res, next) => {
    try {
        const user = await Contact.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.json({ user, contacts });
    } catch (error) {
        next(error);
    }
};

export const getContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();
        return res.json(contacts);
    } catch (error) {
        next(error);
    }
}