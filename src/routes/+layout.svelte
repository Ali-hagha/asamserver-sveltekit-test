<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
	import Sidebar from './Sidebar.svelte';
</script>

<Sidebar />

<Header />

<main class="ml-[135px] bg-athens_gray h-full">
	<slot />
</main>
