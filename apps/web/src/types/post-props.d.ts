type PostProps = import('@sanity/client').SanityDocument<{
	body: import('@portabletext/svelte/ptTypes').InputValue;
	image: ImageProps;
	slug: string;
	title: string;
}>;
