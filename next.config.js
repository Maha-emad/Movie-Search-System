/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"]
		});

		return config;
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "tmdb.org",
				port: "",
				pathname: "/t/p/**"
			},
			{ protocol: "https", hostname: "themoviedb.org", port: "", pathname: "/t/p/**" },
			{ protocol: "https", hostname: "image.tmdb.org", port: "", pathname: "/t/p/**" }
		]
	}
};

export default nextConfig;
