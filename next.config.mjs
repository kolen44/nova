// @ts-check
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    images: {
        unoptimized: true, // Disable Image Optimization
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

if (process.env.NODE_ENV === "development") {
    await setupDevPlatform();
}

export default nextConfig;
