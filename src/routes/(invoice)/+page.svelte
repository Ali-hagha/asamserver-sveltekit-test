<script lang="ts">
	import type { PaymentMethod } from '$lib/types/types';

	import PaymentAccordionItem from './PaymentAccordionItem.svelte';
	import InvoiceHeader from './InvoiceHeader.svelte';
	import InvoiceItems from './InvoiceItems.svelte';

	import iconBitcoin from '$lib/icons/crypto/Bitcoin.svg';
	import iconEthereum from '$lib/icons/crypto/Ethereum.svg';
	import iconLitecoin from '$lib/icons/crypto/Lightcoin.svg';
	import iconBtcCash from '$lib/icons/crypto/BitcoinCash.svg';
	import iconPaypal from '$lib/icons/payment/paypal.svg';
	import iconStripe from '$lib/icons/payment/stripe.svg';
	import iconDiscover from '$lib/icons/payment/discover.svg';
	import iconWebmoney from '$lib/icons/payment/Webmoney.svg';
	import AccountCredit from './AccountCredit.svelte';
	import CryptoPaymentFrom from './CryptoPaymentFrom.svelte';

	let checked: PaymentMethod = 'CRYPTO';

	const accountBalance = 50;
</script>

<div class="flex items-center justify-center pb-20">
	<div class="flex flex-col items-end mx-4">
		<div class="bg-white max-w-[832px] flex-1 border-[1px] border-porcelain rounded-[5px] p-[25px]">
			<InvoiceHeader />
			<div class="px-[15px] mb-5" data-theme="light">
				<p class="font-medium">Payment Methods</p>
			</div>

			<AccountCredit {accountBalance} />

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
				<div slot="content" class="p-4 pb-0">
					<CryptoPaymentFrom />
				</div>
			</PaymentAccordionItem>
			<PaymentAccordionItem bind:checked value="PAYPAL">
				<div slot="title" class="flex items-center justify-between flex-1">
					<p>PayPal</p>
					<div class="flex gap-2">
						<img src={iconPaypal} alt="paypal" />
					</div>
				</div>
				<div slot="content" class="p-4 pb-0">
					<CryptoPaymentFrom />
				</div>
			</PaymentAccordionItem>
			<PaymentAccordionItem bind:checked value="CREDIT_CARD">
				<div slot="title" class="flex items-center justify-between flex-1">
					<p>Credit Card</p>
					<div class="flex gap-2">
						<img src={iconStripe} alt="stripe" />
						<img src={iconDiscover} alt="discover" />
					</div>
				</div>
				<div slot="content" class="p-4 pb-0">
					<CryptoPaymentFrom />
				</div>
			</PaymentAccordionItem>
			<PaymentAccordionItem bind:checked value="WEB_MONEY">
				<div slot="title" class="flex items-center justify-between flex-1">
					<p>Web Money</p>
					<div class="flex gap-2">
						<img src={iconWebmoney} alt="web money" />
					</div>
				</div>
				<div slot="content" class="p-4 pb-0">
					<CryptoPaymentFrom />
				</div>
			</PaymentAccordionItem>

			<InvoiceItems />
		</div>
		<div class="mt-6 flex gap-2">
			<button
				class="text-sm font-medium rounded-[5px] py-2 px-4 bg-porcelain transition-colors active:bg-porcelain hover:bg-french_gray/70"
				>Print Invoice</button
			>
			<button
				class="text-sm font-medium rounded-[5px] py-2 px-4 bg-porcelain transition-colors active:bg-porcelain hover:bg-french_gray/70"
				>Download PDF</button
			>
		</div>
	</div>
</div>
