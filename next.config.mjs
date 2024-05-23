/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cimg.acharyaprashant.org',
            port: '',
          },
        ],
      },
};

export default nextConfig;
