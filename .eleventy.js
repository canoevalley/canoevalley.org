import { HtmlBasePlugin } from "@11ty/eleventy";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy({"static": "files"});
	eleventyConfig.addPlugin(HtmlBasePlugin);
};

export const config = {
	pathPrefix: "/",
};
