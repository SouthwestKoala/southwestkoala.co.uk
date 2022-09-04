<script lang="ts">
	import Page from '$lib/layouts/Page';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Page page={data.page} />
