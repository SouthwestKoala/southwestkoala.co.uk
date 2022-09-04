import sanity from '$lib/config/sanity';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import groq from 'groq';

export const load: PageServerLoad = async ({ params }) => {
	const { slug } = params;

	const query = groq`{
		"post": *[_type == "post" && !(_id in path("drafts.**")) && defined(slug.current) && slug.current == $slug][0] {
			...,
			"description": coalesce(seo.description, pt::text(body[0...1])),
			image {
				...,
				asset->
			},
			"keywords": [...seo.keywords, ...tags],
			"slug": slug.current
		}
	}`;

	try {
		const { post } = await sanity.fetch<{ post: PostProps }>(query, { slug });

		if (post) {
			return { post };
		}
	} catch (e) {
		throw error(500, JSON.stringify(e));
	}

	throw error(404, 'Not Found');
};
