// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://cruxcalc.vercel.app",

	integrations: [sitemap()],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "src/styles/variables.scss";`,
				},
			},
		},
	},
});
