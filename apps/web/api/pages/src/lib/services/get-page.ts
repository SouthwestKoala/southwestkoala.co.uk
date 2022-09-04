import sanity from '$lib/config/sanity';
import groq from 'groq';

const fetchPage = async (slug: string) => {
	const query = groq`
		*[_type == "page" && !(_id in path("drafts.**")) && defined(slug.current) && slug.current == $slug][0] {
			...,
			image {
				...,
				asset->
			},
			"keywords": [...seo.keywords, ...tags],
      "tags": [...tags],
		}
	`;

	return sanity.fetch<PageDTO>(query, { slug });
};

const transformPageData = ({ body, image, keywords, slug, tags, title }: PageDTO): Page => {
	return {
		body,
		image,
		keywords,
		slug: slug.current,
		tags,
		title
	};
};

const getPage = async (slug: string) => fetchPage(slug).then(transformPageData);

export default getPage;
