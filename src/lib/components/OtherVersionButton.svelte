<script lang="ts">
	import { fly } from 'svelte/transition';

	let {
		onclick = $bindable(),
		version,
		index,
	} = $props<{
		onclick: () => void;
		version: number;
		index: number;
	}>();
</script>

<button
	transition:fly={{ x: -56 * (index + 1), duration: 500 }}
	{onclick}
	class="font-golos z-[10] h-12 w-12 rounded-full bg-[#819DD1] text-white transition-colors hover:cursor-pointer hover:bg-[#4B73BD]"
>
	v{version}
</button>
