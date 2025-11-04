import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "sid.fyi",
    short_name: "sid.fyi",
    description: "A bit about sid.",
    categories: ["personal"],
    start_url: "/",
    background_color: "#e4ffff",
    theme_color: "#8080ff",
  };
}
