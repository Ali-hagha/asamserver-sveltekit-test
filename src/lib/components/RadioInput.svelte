<script lang="ts">
	import type { PaymentMethod } from '$lib/types/types';
	export let value: PaymentMethod;
	export let groupAccordion: PaymentMethod;
	export let name: string;
</script>

<input
	type="radio"
	{name}
	class="radio checked:bg-accent_green focus:checked:bg-accent_green checked:hover:bg-accent_green hover:border-accent_green
    w-[18px] h-[18px] border-2"
	{value}
	bind:group={groupAccordion}
/>
