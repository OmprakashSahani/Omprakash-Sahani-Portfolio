// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this configuration to transpile framer-motion as a CommonJS module
  // This helps resolve the "export *" issue in client components.
  // We specify both `framer-motion` and `@motion/utils` for thoroughness.
  // 'react-intersection-observer' is also sometimes needed if used implicitly by framer-motion
  // or explicitly in other components.
  transpilePackages: ['framer-motion', '@motion/utils', 'react-intersection-observer'],
};

export default nextConfig;
