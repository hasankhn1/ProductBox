import axios from 'axios';


export const getItems = () => axios.get('/items');
export const addItems = (params) => axios.post('/items', params);