import type { Contact } from '../../types/contact.type';
import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const createSearchStore = (data: Array<Contact>) => {
	const { subscribe, set, update } = writable({
		data: data,
		filtered: data,
		search: ''
	});

	return {
		subscribe,
		set,
		update
	};
};

export const searchHandler = (store: Writable<unknown>) => {
	const searchTerm = store.search.toLowerCase() || '';

	store.filtered = store.data.filter((item) => {
		return item.searchTerms.toLowerCase().includes(searchTerm);
	});
};
