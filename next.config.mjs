import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/_error',
                destination: '/en',
                permanent: false,
            }
        ]
    }
};
 
export default withNextIntl(nextConfig);