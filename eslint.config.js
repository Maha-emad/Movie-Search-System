import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";
import ts from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});
// ...compat.extends("next/core-web-vitals")
const patchedConfig = fixupConfigRules([]);

const config = [
	...patchedConfig,
	...ts.configs.recommended,
	// Add more flat configs here
	{ ignores: [".next/*"] },
	{
		plugins: {
			react: reactPlugin,
			"@next/next": nextPlugin
		}
	},
	{
		rules: {
			"@typescript-eslint/no-explicit-any": ["off"],
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					args: "all",
					argsIgnorePattern: "^_",
					caughtErrors: "all",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					ignoreRestSiblings: true
				}
			]
		}
	}
];

export default config;
