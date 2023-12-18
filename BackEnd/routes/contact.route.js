import express from 'express';
import { createContact, getContacts, testcontact } from '../controllers/contact.controller.js';
import { verifyToken } from '../utils/verifyUser.js';


const router = express.Router();

router.get('/test-contact', testcontact)
router.post('/create-contact', verifyToken,createContact);
router.get('/get/:id', getContacts );
// router.get('/get', getContacts);

export default router;