<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;

	$: current = $page.url.href === href;
</script>

<slot {current} href={href.toString()}><a {href} class:current>{href}</a></slot>
