import type { Handler } from '@netlify/functions';
import getPage from '$lib/services/get-page';
import getPages from '$lib/services/get-pages';

const msUntilNextHour = () => 3600000 - (new Date().getTime() % 3600000);

const ttl = () => Math.round(msUntilNextHour() / 1000);

const PATH_REGEX = /^\/\.netlify\/functions\/pages(?:\/([-A-Za-z0-9]*))?$/;

/**
 * Reponds with the current JSON Web Key set.
 *
 * @see {@link https://docs.netlify.com/netlify-labs/experimental-features/edge-functions/}
 */
export const handler: Handler = async (event, context) => {
	const match = event.path.match(PATH_REGEX) ?? [];

	const [, slug] = match;

	if (match && slug) {
		try {
			const page = await getPage(slug);

			return {
				statusCode: 200,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(page),
				ttl: ttl()
			};
		} catch (e) {
			console.error(e);
		}
	} else if (match) {
		try {
			const pages = await getPages();

			return {
				statusCode: 200,
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(pages),
				ttl: ttl()
			};
		} catch (e) {
			console.error(e);
		}
	} else {
		return {
			statusCode: 400
		};
	}

	return {
		statusCode: 404
	};
};
