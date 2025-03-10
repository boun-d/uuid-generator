<script lang="ts">
	import '../app.css';
	import { fly } from 'svelte/transition';

	let { children } = $props();
	let isSidebarOpen = $state(false);
</script>

<nav class="fixed z-30 w-full">
	<button
		class="m-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#4B73BD] text-white transition-colors hover:cursor-pointer hover:bg-[#7A6347]"
		onclick={() => (isSidebarOpen = !isSidebarOpen)}
	>
		<img src="/menu.svg" alt="Menu" class="h-6 w-6" />
	</button>

	{#if isSidebarOpen}
		<div
			transition:fly={{ x: -450, duration: 700 }}
			class="fixed inset-4 h-[calc(100dvh-2rem)] w-80 rounded-lg bg-[#C7BAB0] p-4 shadow-md flex flex-col"
		>
			<div class="flex flex-row gap-4">
				<h1 class="ml-2 font-golos text-2xl font-bold text-black">History</h1>
				<div class="flex-grow-1"></div>
				<button
					class="flex h-8 w-8 items-center justify-center rounded-full bg-[#4B73BD] text-white transition-colors hover:cursor-pointer hover:bg-[#7A6347]"
					onclick={() => (isSidebarOpen = !isSidebarOpen)}
				>
					<img src="/back-arrow.svg" alt="Menu" class="h-4 w-4" />
				</button>
			</div>
			<div class="flex flex-col mt-4 mb-2 bg-[#AF9C8E] rounded-lg p-4 flex-grow">

			</div>
			<div class="flex flex-col mt-2 mb-2 bg-[#AF9C8E] rounded-lg p-4">

			</div>
		</div>
	{/if}
</nav>

<main>
	{@render children()}
</main>
