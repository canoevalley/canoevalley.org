export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy({"static": "files"});
};

export const config = {
	pathPrefix: "/canoevalley.org/",
};
