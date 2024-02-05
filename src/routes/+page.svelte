<script lang="ts">
	import arrows from '$lib/images/arrows.svg';
	export let data;
</script>

<div class="flex items-center justify-center">
	<div class="bg-white max-w-[832px] flex-1 border-[1px] border-porcelain rounded-[5px] p-[25px]">
		<div class="p-[15px]">
			<div class="mb-14">
				<h3 class="text-3xl text-primary_dark">Invoice #{data.invoiceData.id}</h3>
				{#if !data.invoiceData.paid}
					<div
						class=" absolute right-0 top-0 bg-accent_light_red text-accent_red text-sm font-semibold py-2 pr-6 pl-9"
					>
						<p>Unpaid</p>
						<div
							class="absolute left-0 top-0 w-0 h-0 border-t-[18px] border-t-transparent border-l-[15px] border-l-white border-b-[18px] border-b-transparent"
						></div>
					</div>
				{/if}
			</div>
			<div class="flex items-start justify-between">
				<div>
					<h4 class="text-primary_dark font-medium mb-2.5">Invoiced To</h4>
					<div class="text-sm font-medium text-stone_gray">
						<p>{data.invoiceData.invoicedTo.name}</p>
						{#if data.invoiceData.invoicedTo.email}
							<p>{data.invoiceData.invoicedTo.email}</p>
						{/if}
						<p>{data.invoiceData.invoicedTo.address}</p>
					</div>
				</div>
				<img src={arrows} alt="arrows" class="-ml-8" />
				<div>
					<h4 class="text-primary_dark font-medium mb-2.5">Pay To</h4>
					<div class="text-sm font-medium text-stone_gray max-w-44">
						<p>{data.invoiceData.payTo.name}</p>
						{#if data.invoiceData.payTo.email}
							<p>{data.invoiceData.payTo.email}</p>
						{/if}
						<p>{data.invoiceData.payTo.address}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
