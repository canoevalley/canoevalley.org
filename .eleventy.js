export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
};

export const config = {
	pathPrefix: "/canoevalley.org/",
};
