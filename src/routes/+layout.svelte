<script lang="ts">
	import '../app.css';
	let { children } = $props();
	let isSidebarOpen = $state(false);
</script>

<nav class="fixed w-full z-20">
	<button 
		class="flex m-8 h-12 w-12 items-center justify-center rounded-full bg-[#4B73BD] text-white transition-colors hover:bg-[#7A6347]"
		onclick={() => isSidebarOpen = !isSidebarOpen}
	>
		☰
	</button>
	
	{#if isSidebarOpen}
		<div class="fixed inset-4 p-4 z-30 bg-[#7A6347] shadow-md w-80 h-[calc(100dvh-36px)]">
			<ul>
				<li class="p-2 hover:bg-gray-100 rounded">
					<a href="/">UUID Generator</a>
				</li>
				<!-- Add more menu items as needed -->
			</ul>
		</div>
	{/if}
</nav>

<main>
	{@render children()}
</main>