/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vaqybtnqyonvlwtskzmv.supabase.co",
        pathname: "/storage/v1/object/public/projects-images/team-section/starter/img/**",
      },
    ],
  },
};

export default nextConfig;
