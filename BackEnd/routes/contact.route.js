import express from 'express';
import { createContact, getContact, getContacts, testcontact } from '../controllers/contact.controller.js';
import { verifyToken } from '../utils/verifyUser.js';



const router = express.Router();

router.get('/test-contact', testcontact)
router.post('/create-contact', verifyToken,createContact);
router.get('/get-contact/:id', verifyToken,getContact);
router.get('/get-contact', verifyToken,getContacts);


export default router;