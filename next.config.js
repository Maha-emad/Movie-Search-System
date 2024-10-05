/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const nextConfig = {
	reactStrictMode: true,
	output: 'standalone',
	webpack(config) {
		config.module.rules.push(
			{
				test: /\.svg$/,
				use: ['@svgr/webpack']
			},
		);
		
		return config;
	}
};

module.exports = nextConfig;
