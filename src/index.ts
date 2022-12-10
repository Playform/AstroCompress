import type { AstroIntegration } from "astro";

import pipeline from "@nikolarhristov/pipeline";
import type { Options as PipelineOptions } from "@nikolarhristov/pipeline/dist/options/index.js";
import type { Options as CompressOptions } from "@nikolarhristov/pipeline/dist/options/lib/compress/index.js";

export default (
	_options: PipelineOptions & CompressOptions = {}
): AstroIntegration => ({
	name: "astro-compress",
	hooks: {
		"astro:build:done": async () => {
			await new pipeline(_options).compress();
		},
	},
});
