<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import { Image, Time } from '$lib/components';
	import Site from '$lib/layouts/Site';

	export let post: PostProps;
</script>

<Site>
	<main>
		<h1
			class="text-3xl md:text-4xl lg:text-5xl text-white font-black tracking-tight leading-normal text-center my-8 sm:my-16"
		>
			{post.title}
		</h1>
		<div class="relative">
			<div class="absolute inset-0 flex items-center">
				<div class="max-w-xs w-full mx-auto border-t border-slate-400" />
			</div>
			<div class="relative flex justify-center">
				<span>
					<Time datetime={post._createdAt} />
				</span>
			</div>
		</div>
		<article>
			<Image image={post.image} />
			<PortableText value={post.body} />
		</article>
	</main>
</Site>

<style lang="postcss">
	span {
		@apply text-sm px-4 bg-slate-900 text-slate-400 border-x border-slate-400;
	}
</style>
