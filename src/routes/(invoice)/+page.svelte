<script lang="ts">
	import InvoiceHeader from './InvoiceHeader.svelte';
	export let data;
</script>

<div class="flex items-center justify-center">
	<div class="bg-white max-w-[832px] flex-1 border-[1px] border-porcelain rounded-[5px] p-[25px]">
		<InvoiceHeader />
	</div>
</div>
