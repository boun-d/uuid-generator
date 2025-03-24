<script lang="ts">
	let { onclick = $bindable(), version } = $props<{
		onclick: () => void;
		version: number;
	}>();
</script>

<button
	{onclick}
	class="font-golos z-20 h-12 w-12 rounded-full bg-[#819DD1] text-white transition-colors hover:cursor-pointer hover:bg-[#4B73BD]"
>
	v{version}
</button>
