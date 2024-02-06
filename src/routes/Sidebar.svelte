<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import IconBtn from './IconBtn.svelte';
	import type { IconButton } from '$lib/types/types';
	import iconCategory from '$lib/icons/sidebar/vuesax-bulk-category-2.svg';
	import iconDriver from '$lib/icons/sidebar/vuesax-bulk-driver.svg';
	import iconFolderCloud from '$lib/icons/sidebar/vuesax-bulk-folder-cloud.svg';
	import iconMessage from '$lib/icons/sidebar/vuesax-bulk-message-notif.svg';
	import iconMonitor from '$lib/icons/sidebar/vuesax-bulk-monitor-recorder.svg';
	import iconProfile from '$lib/icons/sidebar/vuesax-bulk-profile-circle.svg';
	import iconReceiptDiscount from '$lib/icons/sidebar/vuesax-bulk-receipt-disscount.svg';
	import iconReceiptText from '$lib/icons/sidebar/vuesax-bulk-receipt-text.svg';

	const generalBtns: IconButton[] = [
		{
			href: '/',
			icon: iconCategory,
			title: 'categories'
		},
		{
			href: '/',
			icon: iconDriver,
			title: 'drives'
		},
		{
			href: '/',
			icon: iconReceiptText,
			title: 'reciepts'
		},
		{
			href: '/',
			icon: iconMessage,
			title: 'notifications'
		},
		{
			href: '/',
			icon: iconReceiptDiscount,
			title: 'coupons'
		},
		{
			href: '/',
			icon: iconProfile,
			title: 'profile'
		}
	];

	const proBtns: IconButton[] = [
		{
			href: '/',
			icon: iconMonitor,
			title: 'video chat'
		},
		{
			href: '/',
			icon: iconFolderCloud,
			title: 'cloud storage'
		}
	];
</script>

<div
	class="xl:w-[135px] lg:w-28 w-24 h-full fixed z-10 top-0 left-0 overflow-x-hidden
	bg-gradient-to-b from-primary_dark to-rich_black pt-[60px]
	flex flex-col items-center"
>
	<Logo />
	<div class="pt-[60px] gap-10 flex flex-col">
		<div class="flex flex-col items-center">
			<p class="text-cadet_gray mb-[30px] text-sm xl:text-base">GENERAL</p>
			{#each generalBtns as link}
				<IconBtn button={link} />
			{/each}
		</div>

		<div class="flex flex-col items-center">
			<p class="text-cadet_gray mb-[30px] text-sm xl:text-base">PRO</p>
			{#each proBtns as link}
				<IconBtn button={link} />
			{/each}
		</div>
	</div>
</div>
