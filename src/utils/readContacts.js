import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const contactsData = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(contactsData);
  } catch (error) {
    console.log(error.message);
  }
};
