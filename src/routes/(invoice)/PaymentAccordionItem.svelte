<script lang="ts">
	import RadioInput from '$lib/components/RadioInput.svelte';
	import type { PaymentMethod } from '$lib/types/types';
	export let checked: PaymentMethod;
	export let value: PaymentMethod;
	$: open = checked === value;
</script>

<div class="collapse rounded-[5px] border mb-[15px] last:mb-0" class:border-accent_green={open}>
	<input type="radio" name="payment" {value} bind:group={checked} />
	<div
		class="collapse-title font-medium sm:text-base text-sm flex items-center sm:gap-[15px] gap-3 border-porcelain rounded-[5px] px-4 py-0"
		class:rounded-b-none={open}
		class:border={open}
	>
		<RadioInput {value} bind:groupAccordion={checked} name="payment-title" />
		<slot name="title" />
	</div>
	<div class="collapse-content p-0">
		<slot name="content" />
	</div>
</div>
