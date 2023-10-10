export const load = ({ fetch }) => {
	const fetchContacts = async () => {
		const res = await fetch('/api/contacts');
		const data = await res.json();
		return data.contacts;
	};

	return {
		contacts: fetchContacts()
	};
};
