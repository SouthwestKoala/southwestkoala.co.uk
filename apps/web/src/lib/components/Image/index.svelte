<script lang="ts">
	import urlFor from '$lib/helpers/url-for';

	export let image: ImageProps;

	const {
		alt,
		asset: {
			creditLine,
			description,
			metadata: {
				dimensions: { height, width }
			},
			source: { url }
		}
	} = image;

	const srcset = [
		`${urlFor(image)
			.width(Math.min(811, width))
			.height(Math.min(507, height))
			.fit('crop')
			.url()} 811w`,
		`${urlFor(image)
			.width(Math.min(729, width))
			.height(Math.min(456, height))
			.fit('crop')
			.url()} 729w`,
		`${urlFor(image)
			.width(Math.min(648, width))
			.height(Math.min(405, height))
			.fit('crop')
			.url()} 648w`,
		`${urlFor(image)
			.width(Math.min(320, width))
			.height(Math.min(200, height))
			.fit('crop')
			.url()} 320w`
	].join();

	const sizes = [
		'(min-width: 1280px) 811w',
		'(min-width: 1024px) 729w',
		'(min-width: 640px) 648w',
		'320w'
	].join();
</script>

{#if image}
	<figure class="relative">
		{#if creditLine && url}
			<div class="absolute top-0 right-0">
				<div
					class="bg-white px-1.5 py-0.5 text-xs text-neutral-900 opacity-50 hover:opacity-100 transition-opacity duration-300"
				>
					<a class="no-underline" href={url}>{creditLine}</a>
				</div>
			</div>
		{/if}
		<picture>
			<source {sizes} {srcset} />
			<img
				src={urlFor(image)
					.width(Math.min(320, width))
					.height(Math.min(200, height))
					.fit('crop')
					.url()}
				{alt}
				class="rounded object-cover"
			/>
		</picture>
		{#if description}
			<figcaption>
				{description}
			</figcaption>
		{/if}
	</figure>
{/if}
