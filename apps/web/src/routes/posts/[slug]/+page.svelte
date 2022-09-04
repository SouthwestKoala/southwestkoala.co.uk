<script lang="ts">
	import Post from '$lib/layouts/Post';
	import type { PageData } from '.svelte-kit/types/src/routes/posts/[slug]/$types';

	export let data: PageData;
</script>

<Post {...data} />
