<script lang="ts">
	import { page } from '$app/stores';
	import { currencyFormatter } from '$lib/util';
	import type { Invoice } from '$lib/types/types';
	import iconChevronDown from '$lib/icons/chevron-down.svg';

	let checked: boolean = false;

	$: invoice = $page.data.invoiceData as Invoice;
</script>

<div class="collapse bg-porcelain rounded-[5px]">
	<input type="checkbox" bind:checked />
	<div class="collapse-title font-medium px-8 flex items-center justify-between">
		<div class="flex items-center gap-4">
			<p>Invoice Items</p>
			<img src={iconChevronDown} alt="arrow" class="transition-transform" class:rotate-180={checked}/>
		</div>
		<p class="text-stone_gray text-sm">
			(<span class="text-primary_dark">{invoice.items.length}</span> item/s included)
		</p>
	</div>
	<div class="collapse-content">
		<div class="flex flex-col gap-2">
			{#each invoice.items as item}
				<div class="flex items-center justify-between px-4 py-2 rounded-[5px] bg-white">
					<p class="font-medium text-sm leading-4">{item.title}</p>
					<p class="font-medium text-sm leading-4">
						{currencyFormatter.format(item.total)} USD
					</p>
				</div>
			{/each}
		</div>
	</div>
</div>
