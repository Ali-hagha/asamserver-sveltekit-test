<script lang="ts">
	import InvoiceHeader from './InvoiceHeader.svelte';
	import iconCreditCard from '$lib/icons/card-pos.svg';
	import { currencyFormatter } from '$lib/util';
	export let data;

	const accountBalance = 50;
</script>

<div class="flex items-center justify-center">
	<div class="bg-white max-w-[832px] flex-1 border-[1px] border-porcelain rounded-[5px] p-[25px]">
		<InvoiceHeader />
		<div class="px-[15px] mb-5">
			<p class="font-medium">Payment Methods</p>
		</div>
		<div class="border-accent_green border rounded-[5px] ring-[5px] ring-accent_light_green">
			<div class="border-accent_green border-b p-5 flex gap-4">
				<img src={iconCreditCard} alt="credit card" />
				<p class="font-medium text-accent_green">Apply Credit</p>
			</div>
			<div class="p-[30px] flex items-center justify-between">
				<div class="border-l-2 border-l-porcelain pl-3 text-slate_gray leading-7 text-sm">
					<p>
						The amount in your account is <span class="font-semibold text-accent_green"
							>{currencyFormatter.format(accountBalance)} USD.</span
						>
					</p>
					<p>
						Do you want this amount to be taken off <span class="font-semibold text-charcoal"
							>this invoice</span
						>?
					</p>
					<p>
						Please type the number you want in the box below and click "<span
							class="font-semibold text-accent_green">Apply</span
						>"
					</p>
				</div>
				<div
					class="border border-porcelain rounded-[5px] text-stone_gray p-[5px] flex items-center justify-between"
				>
					<input
						type="number"
						min="0.01"
						step="0.01"
						max="2500"
						placeholder="15"
						class="p-0 w-24 border-0 focus:ring-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
					/>
					<button
						class="font-medium text-accent_green py-2 px-2.5 transition-colors
						bg-accent_light_green hover:bg-green-100 active:bg-accent_light_green rounded-[5px]">Apply</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
