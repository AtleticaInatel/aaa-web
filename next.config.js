/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/mkt",
        destination:
            "https://forms.gle/Upw27e22hVk6dM7R8",
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
