import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Zli Bootcamp Web Backend',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: '第1回',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '01-Web概論', link: '/lec01/01-web' },
						{ label: '02-Goの基礎', link: '/lec01/02-go-intro' },
						{ label: '03-条件分岐', link: '/lec01/03-conditional-branch' },
						{ label: '04-ループ', link: '/lec01/04-loop' },
						{ label: '05-関数', link: '/lec01/05-function' },
						{ label: '06-構造体と配列', link: '/lec01/06-structs-array' },
						{ label: '07-パッケージとインポート', link: '/lec01/07-packages-imports' },
					],
				},
				{
                	label: '第2回',
                	items: [
                		// Each item here is one entry in the navigation menu.
                		{ label: '01-WebAPI入門', link: '/lec02/01-api-intro' },
                		{ label: '02-簡単なWebAPIを作成する', link: '/lec02/02-make-simple-api' },
                		{ label: '03-CRUD機能を持つWebAPIを作成する', link: '/lec02/03-api-crud' },
                	],
                },
				{
                	label: '第3回',
                	items: [
                		// Each item here is one entry in the navigation menu.
                		{ label: '01-データベース入門', link: '/lec03/01-db-intro' },
                		{ label: '02-GoからSQLite3を操作する', link: '/lec03/02-go-sql' },
                	],
                },
			],
		}),
	],
});
