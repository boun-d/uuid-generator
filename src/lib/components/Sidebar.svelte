<script lang="ts">
	import { fly } from 'svelte/transition';
	import { history } from '$lib/state.svelte';

	let { onClose = $bindable() } = $props<{
		onClose: () => void;
	}>();
</script>

<div
	transition:fly={{ x: -450, duration: 700 }}
	class="fixed inset-4 flex h-[calc(100dvh-2rem)] w-80 flex-col rounded-lg bg-[#C7BAB0] p-4 shadow-md"
>
	<div class="flex flex-row gap-4">
		<h1 class="font-golos ml-2 text-2xl font-bold text-black">History</h1>
		<div class="flex-grow-1"></div>
		<button
			class="flex h-8 w-8 items-center justify-center rounded-full bg-[#4B73BD] text-white transition-colors hover:cursor-pointer hover:bg-[#7A6347]"
			on:click={onClose}
		>
			<img src="/back-arrow.svg" alt="Menu" class="h-4 w-4" />
		</button>
	</div>
	<div
		class="mt-4 mb-2 flex flex-grow flex-col overflow-scroll rounded-lg bg-[#AF9C8E] p-4"
		style="scrollbar-width: none;"
	>
		<ul>
			{#each [...history].reverse() as uuid}
				<li class="mb-1 text-[0.70rem] text-white">{uuid}</li>
			{/each}
		</ul>
	</div>
	<div class="mt-2 mb-2 flex flex-col gap-2">
		<div class="flex">
			<div class="font-golos font-semibold rounded-full bg-[#4B73BD] px-2 py-1 text-[0.7rem] text-white">
				About the dev
			</div>
		</div>
		<div class="flex">
			<img src="/github.svg" alt="Github" class="h-6 w-6" />
			<a href="https://www.github.com/boun-d" class="font-golos font-semibold px-2 py-1 text-[0.7rem] text-white">
				github.com/boun-d
			</a>
		</div>
		<div class="flex">
			<img src="/linkedin.svg" alt="LinkedIn" class="h-6 w-6" />
			<a href="https://www.linkedin.com/in/daniel-bound" class="font-golos font-semibold px-2 py-1 text-[0.7rem] text-white">
				linkedin.com/in/daniel-bound
			</a>
		</div>
	</div>
</div> 