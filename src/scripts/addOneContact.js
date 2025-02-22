import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    let existingContacts = await readContacts();
    existingContacts.push(createFakeContact());
    await writeContacts(existingContacts);
  } catch (error) {
    console.log(error.message);
  }
};

addOneContact();
