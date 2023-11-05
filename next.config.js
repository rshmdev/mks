/** @type {import('next').NextConfig} */
const nextConfig = {

    compiler: {
        styledComponents: true,
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mks-sistemas.nyc3.digitaloceanspaces.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
