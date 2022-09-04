import sanity from '$lib/config/sanity';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import groq from 'groq';

export const load: PageServerLoad = async () => {
	const query = groq`{
		"posts": *[_type == "post" && !(_id in path("drafts.**")) && defined(slug.current)] {
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
		const { posts } = await sanity.fetch<{ posts: PostProps[] }>(query);

		if (posts) {
			return { posts };
		}
	} catch (e) {
		throw error(500, JSON.stringify(e));
	}

	throw error(404, 'Not Found');
};
