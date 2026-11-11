import type { MetadataRoute } from "next";
import { colors } from "@/constants/theme";
import { siteDescription } from "@/utils/metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "sid.fyi",
    short_name: "sid.fyi",
    description: siteDescription,
    categories: ["personal"],
    start_url: "/",
    background_color: colors.background,
    theme_color: colors.background,
  };
}
