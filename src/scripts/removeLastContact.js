import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  let existingContacts = await readContacts();
  existingContacts.pop();
  await writeContacts(existingContacts);
};

removeLastContact();
