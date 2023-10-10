<script lang="ts">
	import type { Contact } from '../types/contact.type';

	export let contacts: Array<Contact>;
</script>

{#if contacts != null}
	<table class="bg-seasalt border-2 border-black shadow-hard table-auto min-w-[50vw] my-6">
		<tr>
			{#each Object.entries(contacts[0]) as [key, value]}
				<th class="border border-slate-300 text-xl px-4">{key}</th>
			{/each}
			<th class="border border-slate-300 text-xl px-4" />
		</tr>
		{#each contacts as contact}
			<tr>
				<td class=" p-4 m-3 border border-black">{contact.name}</td>
				<td class=" p-4 m-3 border border-black">{contact.phoneNumber}</td>
				<td class=" p-4 m-3 border border-black">{contact.email}</td>
				<td class=" p-4 m-3 border border-black">{contact.street}</td>
				<td class=" p-4 m-3 border border-black">{contact.city}</td>
				<td class=" p-4 m-3 border border-black"
					><button
						class="shadow-hard shadow-black border-black border-2 bg-np-yellow m-3 px-4 py-2 font-bold"
						>edit</button
					></td
				>
			</tr>
		{/each}
	</table>
{/if}
