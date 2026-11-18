import statamic from '@statamic/cms/vite-plugin';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/tailwind_color-fieldtype.js',
                // 'resources/css/tailwind_color-fieldtype.css'
            ],
            publicDirectory: 'resources/dist',
        }),
        statamic(),
    ],
});
