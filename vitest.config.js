/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';
import vue from '@vitejs/plugin-vue';

export default getViteConfig({
	test: {
		root: './test/unit',
		environment: 'happy-dom'
	},
	plugins: [vue()]
});