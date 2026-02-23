import { MetadataRoute } from "next";
import { caseStudies } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyUrls = caseStudies.map((cs) => ({
    url: `https://tahasiddiqui.dev/case-studies/${cs.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://tahasiddiqui.dev",
      lastModified: new Date(),
    },
    ...caseStudyUrls,
  ];
}
