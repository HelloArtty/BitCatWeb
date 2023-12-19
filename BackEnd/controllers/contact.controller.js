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
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return next(errorHandler(404, 'Contact not found!'));
        }
        res.status(200).json(contact);
    } catch (error) {
        next(error);
    }
};

export const getContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();
        
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
};