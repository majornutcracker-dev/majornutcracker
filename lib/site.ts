export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes a file in /public with the basePath (next/image does not). */
export const asset = (path: string) => `${basePath}${path}`;

export const site = {
  name: "Major Nutcracker",
  tagline: "We crack complex problems",
  description:
    "Major Nutcracker is a technology and design team that turns complex problems into clear, useful and functional digital solutions.",
  developersUrl: "https://developer.majornutcracker.com",
};
