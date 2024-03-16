/** @type {import('next').NextConfig} */
const nextConfig = {
    staticPageGenerationTimeout: 120,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
