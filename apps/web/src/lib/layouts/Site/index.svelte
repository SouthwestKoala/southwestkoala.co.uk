<script lang="ts">
	import { Footer, Header } from '$lib/layouts/Site';
</script>

<div class="flex flex-col">
	<slot name="header">
		<header>
			<slot name="site-header"><Header /></slot>
			<slot name="page-header" />
		</header>
	</slot>

	<slot />

	<slot name="footer">
		<footer>
			<slot name="page-footer" />
			<slot name="site-footer"><Footer /></slot>
		</footer>
	</slot>
</div>
