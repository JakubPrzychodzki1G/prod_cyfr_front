/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://127.0.0.1:8000/api/:path*',
            },
            {
                source: '/media/:path*',
                destination: 'http://127.0.0.1:8000/media/:path*'
            },
            {
                source: '/tmp/:path*',
                destination: 'http://127.0.0.1:8000/tmp/:path*'
            }
        ]
    },
    env: {
        apiCalendarKey: process.env.API_KEY,
        envImagesLocation: process.env.IMAGE_LOCATION
    },
    experimental: {
        proxyTimeout: 120000,
    },
}

module.exports = nextConfig