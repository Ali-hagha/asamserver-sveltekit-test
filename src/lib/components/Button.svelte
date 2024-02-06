<script lang="ts">
	import type { Optional } from '$lib/types/types';
	export let title: Optional<string> = undefined;
	export let icon: Optional<string> = undefined;
	export let type: 'primary' | 'secondary' | 'icon' | 'block';
	export let clickHandler: (
		e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
	) => void = (e) => {
		console.log(e.currentTarget);
	};

	$: isPrimary = type === 'primary';
	$: isSecondary = type === 'secondary';
	$: isIcon = type === 'icon';
	$: isBlock = type === 'block';

	$: primaryClasses =
		'xl:px-9 px-7 bg-accent_green hover:bg-accent_green/90 active:bg-accent_green text-white';
	$: secondaryClasses =
		'xl:px-9 px-7 bg-porcelain text-space_gray hover:bg-french_gray/60 active:bg-porcelain flex items-center justify-center gap-2.5';
	$: iconClasses =
		'xl:px-4 px-3 bg-porcelain text-space_gray hover:bg-french_gray/60 active:bg-porcelain';
	$: blockClasses =
		'w-full bg-accent_green hover:bg-accent_green/90 active:bg-accent_green text-white';
</script>

<button
	on:click={clickHandler}
	class="xl:py-4 py-3 rounded-[5px] font-medium transition-colors
    {isPrimary ? primaryClasses : ''}
    {isSecondary ? secondaryClasses : ''}
    {isIcon ? iconClasses : ''}
    {isBlock ? blockClasses : ''}
"
>
	{#if icon}
		<img src={icon} alt={title} class="inline" />
	{/if}
	{#if title}
		{title}
	{/if}
</button>
