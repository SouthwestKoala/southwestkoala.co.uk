// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}

	interface PrivateEnv {
		SANITY_DATASET: string;
		SANITY_PROJECT_ID: string;
		SANITY_TOKEN: string;
	}

	interface PublicEnv {
		SANITY_DATASET: string;
		SANITY_PROJECT_ID: string;
	}
}
