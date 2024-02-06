<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
	import Sidebar from './Sidebar.svelte';
</script>

<Sidebar />

<Header />
<main class="xl:ml-[135px] lg:ml-28 ml-24 bg-athens_gray h-full text-primary_dark">
	<slot />
</main>
