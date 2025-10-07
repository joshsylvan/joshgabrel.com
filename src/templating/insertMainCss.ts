import { getBaseFolderLayer } from "../fileSystem/getBaseFolderLayer.ts";

export const insertMainCSS = (pageString: string, htmlPath: string): string => {
  const relativePath = getBaseFolderLayer(htmlPath);
  const linkRegex = /<link\b[^>]*rel=["']stylesheet["'][^>]*>/gi;
  pageString = pageString.replaceAll(linkRegex, (match) => {
    if (match.includes("main")) {
      return match.replace("main", `href="${relativePath}main.css"`);
    }
    return match;
  });
  return pageString;
};
