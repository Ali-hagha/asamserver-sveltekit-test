<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
	import Sidebar from './Sidebar.svelte';
</script>

<Sidebar />

<Header />
<main class="xl:ml-[135px] lg:ml-28 sm:ml-24 ml-0 bg-athens_gray h-full text-primary_dark">
	<slot />
</main>
