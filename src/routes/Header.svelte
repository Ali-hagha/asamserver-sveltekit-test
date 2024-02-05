<script lang="ts">
	import { currencyFormatter } from '$lib/util';
	import iconWallet from '$lib/icons/vuesax-outline-wallet-add.svg';
	import iconCart from '$lib/icons/cart.svg';
	import Button from '$lib/components/Button.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
</script>

<header
	class="ml-[135px] px-[50px] pt-12 pb-[60px] bg-athens_gray flex items-center justify-between"
>
	<div>
		<h2 class="text-3xl mb-3 text-primary_dark">Invoice Details</h2>
		<Breadcrumbs />
	</div>
	<div class="flex gap-5">
		<Button title="Deploy Now" type="primary" />
		<Button
			title="Balance: {currencyFormatter.format(160.56)} USD"
			type="secondary"
			icon={iconWallet}
		/>
		<Button type="icon" icon={iconCart} />
	</div>
</header>
