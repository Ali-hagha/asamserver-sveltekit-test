<script lang="ts">
	import type { Optional } from '$lib/types/types';
	export let title: Optional<string> = undefined;
	export let icon: Optional<string> = undefined;
	export let type: 'primary' | 'secondary' | 'icon';
	export let clickHandler: (
		e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
	) => void = (e) => {
		console.log(e.currentTarget);
	};

	$: isPrimary = type === 'primary';
	$: isSecondary = type === 'secondary';
	$: isIcon = type === 'icon';

	$: primaryClasses =
		'px-9 bg-accent_green hover:bg-accent_green/90 active:bg-accent_green text-white';
	$: secondaryClasses =
		'px-9 bg-porcelain text-space_gray hover:bg-french_gray/60 active:bg-porcelain flex items-center justify-center gap-2.5';
	$: iconClasses = 'bg-porcelain text-space_gray hover:bg-french_gray/60 active:bg-porcelain px-4';
</script>

<button
	on:click={clickHandler}
	class="py-4 rounded-[5px] font-medium transition-colors
    {isPrimary ? primaryClasses : ''}
    {isSecondary ? secondaryClasses : ''}
    {isIcon ? iconClasses : ''}
"
>
	{#if icon}
		<img src={icon} alt={title} class="inline" />
	{/if}
	{#if title}
		{title}
	{/if}
</button>
