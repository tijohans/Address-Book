<script lang="ts">
	import { createSearchStore, searchHandler } from '$lib/stores/search';
	import { onDestroy } from 'svelte';
	export let data;
	import Table from '../components/Table.svelte';
	import type { Contact } from '../types/contact.type';

	const contactsWithSearch = data.contacts.map((contact: Contact) => ({
		...contact,
		searchTerms: `${contact.name} ${contact.email}`
	}));

	const searchStore = createSearchStore(contactsWithSearch);

	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));
	onDestroy(() => {
		unsubscribe();
	});
</script>

<input
	type="search"
	name="table-search"
	id="table-search"
	class="border-black border-2 h-12 shadow-hard my-3"
	bind:value={$searchStore.search}
/>

<button class="shadow-hard border-black border-2 h-12 my-3 mx-3 bg-np-yellow font-bold px-2"
	>create new</button
>

<Table contacts={$searchStore.filtered} />
