import axios from 'axios';
const baseUrl = 'http://localhost:3001/contacts'

const getAll = () => {
  return axios.get(baseUrl);
}

const getSpecificContact = (id) => {
  return axios.get(`${baseUrl}/${id}`);
}

const insert = (newContact) => {
  return axios.post(baseUrl, newContact);
}

const deleteContact = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
}


export default { getAll, insert, deleteContact, getSpecificContact }