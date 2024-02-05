<script lang="ts">
	import type { Invoice } from '$lib/types/types';
	import { page } from '$app/stores';
	import arrows from '$lib/images/arrows.svg';

	$: invoice = $page.data.invoiceData as Invoice;
</script>

<div class="p-[15px]">
	<div class="mb-14">
		<h3 class="text-3xl text-primary_dark">Invoice #{invoice.id}</h3>
		{#if !invoice.paid}
			<div
				class=" absolute right-0 top-0 bg-accent_light_red text-accent_red text-sm font-semibold py-2 pr-6 pl-9"
			>
				<p>Unpaid</p>
				<div
					class="absolute left-0 top-0 w-0 h-0 border-t-[18px] border-t-transparent border-l-[15px] border-l-white border-b-[18px] border-b-transparent"
				></div>
			</div>
		{/if}
	</div>
	<div class="flex items-start justify-between">
		<div>
			<h4 class="text-primary_dark font-medium mb-2.5">Invoiced To</h4>
			<div class="text-sm font-medium text-stone_gray">
				<p>{invoice.invoicedTo.name}</p>
				{#if invoice.invoicedTo.email}
					<p>{invoice.invoicedTo.email}</p>
				{/if}
				<p>{invoice.invoicedTo.address}</p>
			</div>
		</div>
		<img src={arrows} alt="arrows" class="-ml-8" />
		<div>
			<h4 class="text-primary_dark font-medium mb-2.5">Pay To</h4>
			<div class="text-sm font-medium text-stone_gray max-w-44">
				<p>{invoice.payTo.name}</p>
				{#if invoice.payTo.email}
					<p>{invoice.payTo.email}</p>
				{/if}
				<p>{invoice.payTo.address}</p>
			</div>
		</div>
	</div>
</div>
