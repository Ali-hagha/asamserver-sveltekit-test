<script lang="ts">
	import { currencyFormatter } from '$lib/util';
	import type { PaymentMethod } from '$lib/types/types';

	import PaymentAccordionItem from './PaymentAccordionItem.svelte';
	import InvoiceHeader from './InvoiceHeader.svelte';

	import iconCreditCard from '$lib/icons/card-pos.svg';
	import iconBitcoin from '$lib/icons/crypto/Bitcoin.svg';
	import iconEthereum from '$lib/icons/crypto/Ethereum.svg';
	import iconLitecoin from '$lib/icons/crypto/Lightcoin.svg';
	import iconBtcCash from '$lib/icons/crypto/BitcoinCash.svg';
	import iconPaypal from '$lib/icons/payment/paypal.svg';
	import iconStripe from '$lib/icons/payment/stripe.svg';
	import iconDiscover from '$lib/icons/payment/discover.svg';
	import iconWebmoney from '$lib/icons/payment/Webmoney.svg';

	export let data;
	let checked: PaymentMethod = 'CRYPTO';

	const accountBalance = 50;
</script>

<div class="flex items-center justify-center">
	<div class="bg-white max-w-[832px] flex-1 border-[1px] border-porcelain rounded-[5px] p-[25px]">
		<InvoiceHeader />
		<div class="px-[15px] mb-5" data-theme="light">
			<p class="font-medium">Payment Methods</p>
		</div>
		<div class="border-accent_green border rounded-[5px] ring-[5px] ring-accent_light_green mb-10">
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

		<PaymentAccordionItem bind:checked value="CRYPTO">
			<div slot="title" class="flex items-center justify-between flex-1">
				<p>Crypto Currency</p>
				<div class="flex gap-2">
					<img src={iconBitcoin} alt="bitcoin" />
					<img src={iconEthereum} alt="ethereum" />
					<img src={iconLitecoin} alt="litecoin" />
					<img src={iconBtcCash} alt="bitcoin cash" />
				</div>
			</div>
			<div slot="content" class="">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus, ipsa ut
				error assumenda doloremque, aliquid eveniet reprehenderit, quaerat vel illo eligendi
				inventore consequatur reiciendis. Fugiat et hic quidem similique!
			</div>
		</PaymentAccordionItem>
		<PaymentAccordionItem bind:checked value="PAYPAL">
			<div slot="title" class="flex items-center justify-between flex-1">
				<p>PayPal</p>
				<div class="flex gap-2">
					<img src={iconPaypal} alt="paypal" />
				</div>
			</div>
			<div slot="content" class="w-full bg-accent_light_green"></div>
		</PaymentAccordionItem>
		<PaymentAccordionItem bind:checked value="CREDIT_CARD">
			<div slot="title" class="flex items-center justify-between flex-1">
				<p>Credit Card</p>
				<div class="flex gap-2">
					<img src={iconStripe} alt="stripe" />
					<img src={iconDiscover} alt="discover" />
				</div>
			</div>
			<div slot="content" class="w-full bg-accent_light_green"></div>
		</PaymentAccordionItem>
		<PaymentAccordionItem bind:checked value="WEB_MONEY">
			<div slot="title" class="flex items-center justify-between flex-1">
				<p>Web Money</p>
				<div class="flex gap-2">
					<img src={iconWebmoney} alt="web money" />
				</div>
			</div>
			<div slot="content" class="w-full bg-accent_light_green"></div>
		</PaymentAccordionItem>
	</div>
</div>
