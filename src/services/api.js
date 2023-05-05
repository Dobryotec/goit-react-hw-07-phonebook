import axios from 'axios';

axios.defaults.baseURL = 'https://6454f6daf803f345763642af.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async values => {
  const { data } = await axios.post('/contacts', values);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
