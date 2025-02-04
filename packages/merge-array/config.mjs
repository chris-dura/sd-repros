export const getConfig = (brand) => {
	const cfg = {
		log: {
			warnings: "warn",
			verbosity: "verbose"
		},
		// include: [],
		source: [
		`tokens/globals/**/*.js`,
		`tokens/brands/${brand}/**/*.js`,
		`tokens/globals/**/*.js`,
		`tokens/brands/${brand}/**/*.js`,
		],
		platforms: {
			"json": {
				files: [
					{
						destination: `output-${brand}.json`,
						format: "json",
					},
				],
			},
		},
	}

	return cfg;
};
