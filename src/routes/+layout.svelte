<script>
	import '../app.css';
	import NavigationSidebar from '../components/NavigationSidebar.svelte';
</script>

<NavigationSidebar />
<div class="ml-[150px] px-20 bg-ls-blue h-screen">
	<slot />
</div>
