export default {
	arrowParens: 'avoid',
	bracketSpacing: true,
	useTabs: true,
	singleQuote: true,
	quoteProps: 'as-needed',
	printWidth: 100,
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.svelte',
			options: {
				parser: 'svelte',
				svelteBracketNewLine: false,
				svelteAllowShorthand: true,
				svelteSortOrder: 'options-scripts-markup-styles',
			},
		},
	],
};
