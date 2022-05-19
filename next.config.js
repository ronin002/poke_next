/** @type {import('next').NextConfig} */

/*
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["cdn.traction.one"],
  },
}

module.exports = nextConfig
*/
module.exports = {
  reactStrictMode: true,
  images:{
    domains:["cdn.traction.one"],
  },

  webpack: (config, { isServer }) => {
      if (!isServer) {
          // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
          config.resolve.fallback = {
              fs: false
          }
      }

      return config;
  }
}
