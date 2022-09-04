interface PageProps {
	body: import('@portabletext/svelte/ptTypes').InputValue;
	image: unknown;
	keywords: string[];
	tags: string[];
	slug: string;
	title: string;
}

type PageDTO = import('@sanity/client').SanityDocument<
	Omit<PageProps, 'slug'> & { slug: { current: string } }
>;
type Page = Required<PageProps>;
