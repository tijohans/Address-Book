<script lang="ts">
	const pages: Array<string> = ['profile', 'contacts'];
</script>

<aside class="fixed h-screen w-[150px] top-0 left-0 bg-ag-blue">
	<nav class="h-full w-full flex items-center justify-center">
		<ul class="list-none">
			{#each pages as page}
				<a href="/contacts" class="">
					<li class="bg-cc-pink shadow-hard mx-2 my-3 border-black border-2 font-bold h-12 px-2">
						{page}
					</li>
				</a>
			{/each}
		</ul>
	</nav>
</aside>
