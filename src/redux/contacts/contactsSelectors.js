export const getContacts = store => store.contacts;
export const getFilteredContacts = ({ contacts = [], filter }) => {
  const normalizedFilterValue = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) => {
    const normalizedName = name.toLowerCase();
    return normalizedName.includes(normalizedFilterValue);
  });
  return filteredContacts;
};
