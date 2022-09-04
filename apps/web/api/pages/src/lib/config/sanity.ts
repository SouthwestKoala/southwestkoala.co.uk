import SanityClientConstructor from '@sanity/client';
import { DEV } from '$lib/config/env';
import { SANITY_DATASET, SANITY_PROJECT_ID, SANITY_TOKEN } from '$lib/config/env';

const sanity = SanityClientConstructor({
	dataset: SANITY_DATASET,
	projectId: SANITY_PROJECT_ID,
	apiVersion: 'v2021-10-21',
	token: SANITY_TOKEN,
	useCdn: !DEV
});

export default sanity;
