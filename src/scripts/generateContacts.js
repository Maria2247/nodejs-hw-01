import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const generateContacts = async (number) => {
  try {
    let contactsList = await readContacts();

    for (let i = 0; i <= number; i += 1) {
      contactsList.push(createFakeContact());
    }

    await writeContacts(contactsList);
  } catch (error) {
    console.log(error.message);
  }
};

generateContacts(5);
