/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ACCESS_TOKEN: "3o1X#052Co",
    REFRESH_TOKEN: "fg0(NhU6P&|1",
    USER_DATA: "(8.6|£wFy:59",
    BASE_URL: "https://dummyjson.com/",
    ENCRYPTION_SALT: "£A78sa3.:71q",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/podcasts",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
