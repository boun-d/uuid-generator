<script lang="ts">
	import { v1 as uuidV1, v4 as uuidV4, v7 as uuidV7 } from 'uuid';
	import { fly } from 'svelte/transition';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	import { history } from '$lib/state.svelte';

	const decideVersion = (url: URL) => {
		const version = url.searchParams.get('version') ?? '';
		if (['1', '4', '7'].includes(version)) return parseInt(version);
		return 4;
	}

	function generateNewUUID(version: number) {
		if (version === 1) return uuidV1();
		if (version === 4) return uuidV4();
		if (version === 7) return uuidV7();
		return uuidV4();
	}

	const useVersion = decideVersion(page.url);
	const initUUID = generateNewUUID(useVersion);

	let currentVersion = $state(useVersion);
	let uuid = $state(initUUID);

	let expanded = $state(false);
	let copyText = $state("copy");

	let otherVersions = $derived([1, 4, 7].filter((version) => version !== currentVersion));

	$effect(() => { uuid = generateNewUUID(currentVersion) });
	$effect(() => { if (!history.includes(uuid)) history.push(uuid) });
</script>

<div class="relative grid h-[calc(100vh-80px)] place-items-center">
	<div class="relative">
		<!-- Header -->
		<h1 class="font-golos absolute -top-16 w-full text-left text-4xl font-bold">UUID Generator</h1>
		<div class="flex items-center gap-4">
			<!-- UUID container -->
			<div
				class="w-[calc(100vw-120px)] max-w-[700px] rounded-lg bg-[#8B7355] p-3 text-center text-white sm:w-[calc(100vw-32px)]"
			>
				<span class="font-mono text-2xl">{uuid}</span>
			</div>
			<!-- Button -->
			<button
				onclick={() => { uuid = generateNewUUID(currentVersion) }}
				class="flex h-12 w-12 items-center justify-center rounded-full bg-[#4B73BD] text-white transition-colors hover:cursor-pointer hover:bg-[#7A6347]"
			>
			<img src="/refresh.svg" alt="Refresh" class="h-6 w-6" />
			</button>
		</div>
		<div class="absolute -bottom-4 w-full">
			<div class="absolute w-full">
				<div class="flex flex-row">
					<div
						role="button"
						tabindex="0"
						class="flex flex-row gap-2"
						onmouseenter={() => (expanded = true)}
						onmouseleave={() => (expanded = false)}
					>
						<button
							onclick={() => {
								expanded = !expanded;
							}}
							class="z-20 h-12 w-12 rounded-full bg-[#819DD1] text-white transition-colors hover:cursor-pointer hover:bg-[#4B73BD]"
						>
							v{currentVersion}
						</button>
						{#each otherVersions as version, i}
							{#if expanded}
								<button
									transition:fly={{ x: -56 * (i + 1), duration: 500 }}
									onclick={() => {
										expanded = false;
										currentVersion = version;
										page.url.searchParams.set('version', version.toString());
										goto(`?${page.url.searchParams.toString()}`);
									}}
									class="z-[10] h-12 w-12 rounded-full bg-[#819DD1] text-white transition-colors hover:cursor-pointer hover:bg-[#4B73BD]"
								>
									v{version}
								</button>
							{/if}
						{/each}
					</div>
					<div class="flex-grow"></div>
					<button
						onclick={() => {
							navigator.clipboard.writeText(uuid);
							copyText = "copied!";
							setTimeout(() => { copyText = "copy" }, 3000);
						}}
						class="h-6 pr-2 pl-2 rounded-full bg-[#819DD1] text-xs text-white transition-colors hover:cursor-pointer hover:bg-[#4B73BD]"
					>
						{copyText}
					</button>
					<div class="w-16"></div>
				</div>
			</div>
		</div>
	</div>
</div>
