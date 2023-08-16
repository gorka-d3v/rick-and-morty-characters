/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';
import vue from '@vitejs/plugin-vue';

export default getViteConfig({
	test: {
		environment: 'happy-dom'
		/* for example, use global to avoid globals imports (describe, test, expect): */
		// globals: true,
	},
	plugins: [vue()]
});