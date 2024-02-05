<script lang="ts">
	import type { IconButton } from '$lib/types/types';

	export let button: IconButton;
</script>

<a
	href={button.href}
	class="p-2.5 transition-colors hover:bg-charcoal active:bg-charcoal/50 rounded-[10px] mb-5 last:mb-0"
>
	<img src={button.icon} alt={button.title} />
</a>
