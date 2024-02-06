<script lang="ts">
	import { currencyFormatter } from '$lib/util';
	import iconWallet from '$lib/icons/vuesax-outline-wallet-add.svg';
	import iconCart from '$lib/icons/cart.svg';
	import Button from '$lib/components/Button.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
</script>

<header
	class="xl:ml-[135px] lg:ml-28 ml-24 px-[50px] pt-12 lg:pb-[60px] pb-10 bg-athens_gray flex items-center justify-between"
>
	<div>
		<h2 class="lg:text-3xl text-2xl mb-3">Invoice Details</h2>
		<Breadcrumbs />
	</div>
	<div class="lg:flex hidden gap-5">
		<Button title="Deploy Now" type="primary" />
		<Button
			title="Balance: {currencyFormatter.format(160.56)} USD"
			type="secondary"
			icon={iconWallet}
		/>
		<Button type="icon" icon={iconCart} />
	</div>
</header>
