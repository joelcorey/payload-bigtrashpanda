import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost"
			},
			{
				protocol: "https",
				hostname: "**"
			}
		]
	}
};

// export default nextConfig;
export default withPayload(nextConfig)