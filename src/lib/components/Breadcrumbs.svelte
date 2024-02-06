<script lang="ts">
	import iconTag from '$lib/icons/tag-right.svg';

	const invoiceId = 26773;

	const paths = [
		{
			title: 'Dashboard',
			href: '/'
		},
		{
			title: 'my invoices',
			href: '/'
		},
		{
			title: `#${invoiceId}`,
			href: '/'
		}
	];
</script>

<div class="flex gap-2 items-center">
	<img src={iconTag} alt="tag" />
	<div class="breadcrumbs">
		<ul class="text-stone_gray">
			{#each paths as path, i}
				{#if i === paths.length - 1}
					<li class="text-french_gray">{path.title}</li>
				{:else}
					<li><a href={path.href}>{path.title}</a></li>
				{/if}
			{/each}
		</ul>
	</div>
</div>
