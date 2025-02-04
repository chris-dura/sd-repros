import StyleDictionary from "style-dictionary";

import { getConfig } from "./config.mjs";

["brand-1", "brand-2"].map((brand) => {
	const cfg = getConfig(brand);
	const sd = new StyleDictionary(cfg);
	sd.buildAllPlatforms();
});
