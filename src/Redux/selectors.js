export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state=> state.contacts.isLoading;
export const selectFilter = state => state.filter;

export const selectFilterdData = state => {
	const contacts = selectContacts(state)
	const filter = selectFilter(state)
	return contacts.filter(contact => contact.name.toLowerCase().includes(filter))
}

