interface ImageProps extends import('@sanity/image-url/lib/types/types').SanityImageObject {
	alt: string;
	asset: import('@sanity/image-url/lib/types/types').SanityAsset & {
		creditLine: string;
		description: string;
		metadata: {
			dimensions: {
				height: number;
				width: number;
			};
		};
		source: {
			url: string;
		};
	};
}
