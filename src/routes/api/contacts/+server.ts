import type { Contact } from '../../../types/contact.type';

export const GET = () => {
	const contacts: Array<Contact> = [
		{
			name: 'John Doe',
			phoneNumber: 1234567890,
			email: 'johndoe@example.com',
			street: '123 Main Street',
			city: 'New York'
		},
		{
			name: 'Jane Smith',
			phoneNumber: 9876543210,
			email: 'janesmith@example.com',
			street: '456 Elm Street',
			city: 'Los Angeles'
		},
		{
			name: 'Bob Johnson',
			phoneNumber: 5551234567,
			email: 'bob@example.com',
			street: '789 Oak Avenue',
			city: 'Chicago'
		},
		{
			name: 'Alice Williams',
			phoneNumber: 7778889999,
			email: 'alice@example.com',
			street: '321 Pine Road',
			city: 'Houston'
		}
	];

	return new Response(JSON.stringify({ contacts }));
};
