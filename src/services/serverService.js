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

const update = (id, changedContact) => {
  return axios.put(`${baseUrl}/${id}`, changedContact);
}

const deleteContact = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
}

export default { getAll, getSpecificContact, insert, update, deleteContact }