<script lang="ts">
	import { GitHub, Twitter } from '$lib/components';

	$: year = new Date().getFullYear();
</script>

<div class="container mx-auto my-8 px-4 flex items-center justify-between">
	<p class="text-sm text-slate-300 contrast-more:text-slate-100 ">
		Copyright &copy; {year} Southwest Koala. All rights reserved.
	</p>
	<div class="inline-flex items-center justify-end gap-2">
		<GitHub.Link id="accuser" />
		<Twitter.Link id="accuser" />
	</div>
</div>

<style lang="postcss">
	.container {
		align-items: centre;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: auto;
		margin-top: 2rem;
		margin-right: auto;
		margin-bottom: 2rem;
		padding-left: 1rem;
		padding-right: 1rem;
		width: 100%;
	}

	@media (min-width: 640px) {
		.container {
			max-width: 640px;
		}
	}

	@media (min-width: 768px) {
		.container {
			max-width: 768px;
		}
	}

	@media (min-width: 1024px) {
		.container {
			max-width: 1024px;
		}
	}

	@media (min-width: 1280px) {
		.container {
			max-width: 1280px;
		}
	}

	@media (min-width: 1536px) {
		.container {
			max-width: 1536px;
		}
	}
</style>
