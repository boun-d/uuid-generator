<script lang="ts">
	import { downloadAsJSON, generateUUIDs } from '$lib/utils';

	let versions = $state();
</script>

<div>
	<div class="flex">
		<div class="font-golos rounded-full bg-[#4B73BD] px-2 py-1 text-[0.7rem] text-white">
			Bulk download
		</div>
	</div>
	<div class="mt-3 flex items-center gap-2">
		<div class="overflow-hidden rounded-lg bg-[#AF9C8E]">
			<span class="font-golos px-3 py-2 text-[0.7rem] text-white"> How many </span>
			<input
				type="number"
				min="1"
				max="500"
				bind:value={versions}
				placeholder="1-500"
				class="font-golos w-30 bg-[#AF9C8E] px-2 py-2 text-[0.7rem] text-white placeholder-[#E0D6CC] outline-none"
			/>
		</div>
		<button
			onclick={() => {
				const uuids = generateUUIDs(versions);
				downloadAsJSON(uuids);
				// if (!versions || versions < 1) {
				//     versions = 1;
				// }
				// showError = versions > 500;
				// if (!showError) {
				//     // Download logic would go here
				// }
			}}
			class="font-golos rounded-full bg-[#819DD1] px-2 py-1 text-[0.7rem] text-white hover:cursor-pointer hover:bg-[#4B73BD]"
		>
			Download
		</button>
		<!-- </div> -->
	</div>
</div>
