<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { Image, Time } from '$lib/components';
	import Site from '$lib/layouts/Site';

	export let page: PageProps;
</script>

<Site>
	<main>
		<article>
			<h1>
				<span
					class="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-slate-900 sm:text-4xl"
					>{page.title}</span
				>
			</h1>
			<!-- <div class="relative">
				<div class="absolute inset-0 flex items-center">
					<div class="max-w-xs w-full mx-auto border-t border-slate-300" />
				</div>
				<div class="relative flex justify-center text-xs">
					<span class="px-4 bg-white text-slate-500 border-x border-slate-300">
						<Time datetime={page._createdAt} />
					</span>
				</div>
			</div> -->
			<Image image={page.image} />
			<PortableText value={page.body} />
		</article>
	</main>
</Site>
