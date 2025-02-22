import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const contactsList = await readContacts();
  return contactsList;
};

console.log(await getAllContacts());
