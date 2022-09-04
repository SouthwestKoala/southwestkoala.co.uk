import sanity from '$lib/config/sanity';
import groq from 'groq';

const fetchPages = async () => {
	const query = groq`
		*[_type == "page" && !(_id in path("drafts.**")) && defined(slug.current)] {
			...,
			image {
				...,
				asset->
			},
			"keywords": [...seo.keywords, ...tags],
      "tags": [...tags],
		}
	`;

	return sanity.fetch<PageDTO[]>(query);
};

const transformPageData = (pages: PageDTO[]) =>
	pages.map(({ body, image, keywords, slug, tags, title }) => ({
		body,
		image,
		keywords,
		slug,
		tags,
		title
	}));

const getPages = async () => fetchPages().then(transformPageData);

export default getPages;
