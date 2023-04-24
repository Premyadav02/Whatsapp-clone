import express from 'express';

import { addUser, getUsers } from '../controller/user-controller.js';
import { newConversation, getConversation } from '../controller/conversation-controller.js';
import { newMessage, getMessages } from '../controller/message-controller.js';
import { uploadFile, getImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const route = express.Router();

route.post('/add', addUser)  // ---> To add user in the database
route.get('/users', getUsers); // ---> to get user from data base and show in Left side of Whatsapp Clone

// Creating a conversation between Sender and Receiver
route.post('/conversation/add', newConversation) // ---> set a conversation between Sender and Receiver (setConversation)
route.post('/conversation/get', getConversation) //

//  Creating a Message between Sender and Receiver
route.post('/message/add', newMessage) //  ---> Sending a message to database
route.get('/message/get/:id', getMessages) //  ---> Geting a message from database

// route.post('/')
route.post('/file/upload', upload.single('file'), uploadFile);
route.get('/file/:filename', getImage);

export default route;
