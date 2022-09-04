import sanity from '$lib/config/sanity';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import groq from 'groq';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const query = groq`{
		"page": *[_type == "page" && !(_id in path("drafts.**")) && defined(slug.current) && slug.current == $slug][0] {
			...,
			image {
				...,
				asset->
			},
			"keywords": [...seo.keywords, ...tags],
			"slug": slug.current
		}
	}`;

	try {
		const { page } = await sanity.fetch<{ page: PageProps }>(query, { slug });

		if (page) {
			return { page };
		}
	} catch (e) {
		throw error(500, JSON.stringify(e));
	}

	throw error(404, 'Not Found');
};
