<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/Button.svelte';
	import { currencyFormatter } from '$lib/util';
	import type { Invoice } from '$lib/types/types';

	$: invoice = $page.data.invoiceData as Invoice;
</script>

<div class="p-[14px] pl-2 mb-5">
	<div class="border-l-2 border-l-porcelain pl-3 text-slate_gray leading-7 text-sm">
		<p>
			The <span class="font-semibold text-charcoal">Crypto Currency</span> gateway is
			<span class="font-semibold text-accent_green">Tax-free</span>
			and you can use different currencies such as
			<span class="font-semibold text-charcoal">Bitcoin, Ethereum, Ripple, Tether</span> and other currencies.
		</p>
		<p>
			<span class="font-semibold text-charcoal">Crypto Currency</span> transactions can be processed
			between
			<span class="font-semibold text-charcoal bg-porcelain p-1 rounded-[5px]"
				>30 minutes and 3 days</span
			>
			and please wait at least 30 minutes after payment to receive a
			<span class="font-semibold text-charcoal">response from the blockchain</span>
			network.
		</p>
	</div>
</div>
<div class="flex flex-col gap-2 mb-5">
	<div class="flex items-center justify-between px-4 py-2 border border-porcelain rounded-[5px]">
		<p class="font-medium text-sm leading-4">Sub Total</p>
		<p class="font-medium text-sm leading-4">
			{currencyFormatter.format(invoice.subTotal)} USD
		</p>
	</div>
	<div class="flex items-center justify-between px-4 py-2 border border-porcelain rounded-[5px]">
		<p class="md:block hidden font-medium text-sm leading-4">Discount Code</p>
		<input
			type="text"
			name="discount"
			placeholder="Do you have a discount code?"
			class="md:border-x border-porcelain md:-my-2 sm:text-sm text-xs font-medium md:absolute md:left-32 md:w-[215px]
			h-full focus:ring-0 focus:outline-none md:px-2.5"
		/>
		<p class="font-medium text-sm leading-4">
			{currencyFormatter.format(0)} USD
		</p>
	</div>
	<div class="flex items-center justify-between px-4 py-2 rounded-[5px] bg-porcelain">
		<p class="font-medium text-sm leading-4">Total</p>
		<p class="font-medium text-sm leading-4">
			{currencyFormatter.format(invoice.total)} USD
		</p>
	</div>
</div>
<Button title="PAY NOW ({currencyFormatter.format(invoice.total)})" type="block" />
