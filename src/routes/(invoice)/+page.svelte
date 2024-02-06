<script lang="ts">
	import type { PaymentMethod } from '$lib/types/types';

	import PaymentAccordionItem from './PaymentAccordionItem.svelte';
	import InvoiceHeader from './InvoiceHeader.svelte';

	import iconBitcoin from '$lib/icons/crypto/Bitcoin.svg';
	import iconEthereum from '$lib/icons/crypto/Ethereum.svg';
	import iconLitecoin from '$lib/icons/crypto/Lightcoin.svg';
	import iconBtcCash from '$lib/icons/crypto/BitcoinCash.svg';
	import iconPaypal from '$lib/icons/payment/paypal.svg';
	import iconStripe from '$lib/icons/payment/stripe.svg';
	import iconDiscover from '$lib/icons/payment/discover.svg';
	import iconWebmoney from '$lib/icons/payment/Webmoney.svg';
	import AccountCredit from './AccountCredit.svelte';

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
