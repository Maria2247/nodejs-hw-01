import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  let contactList = await readContacts();
  contactList = [];
  await writeContacts(contactList);
};

removeAllContacts();
