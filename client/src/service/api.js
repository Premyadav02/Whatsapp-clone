import axios from 'axios';

const url = 'http://localhost:8000';

// ----------- To add user in the database ---------------
export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log(error.message);
    }
}

// ----------- To get user from the database ---------------
export const getUsers = async () => {
    try {
        let response =  await axios.get(`${url}/users`);
        // console.log(response);
        return response.data;
    } catch (error) {
        console.log('Error while calling getUser API' ,error.message);
    }
}

// ----------- To set conversation in between Sender and Recevier  ---------------
export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('Error while calling Setconversation API' ,error.message);
    }
}

// ----------- To get conversation in between Sender and Recevier  ---------------
export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling getconversation API' ,error.message);
    }
}

// ----------- To get conversation in between Sender and Recevier  ---------------
export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log('Error while calling newMessage API' ,error.message);
    }
}

// ----------- To get conversation in between Sender and Recevier  ---------------
export const getMessages = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getMessage API' ,error.message);
    }
}

// 
export const uploadFile = async (data) => {
    try {
        return axios.post(`${url}/file/upload`, data) 
    } catch (error) {
        console.log('Error while calling UploadFile API' ,error.message);
    }
}








