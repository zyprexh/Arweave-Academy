module.exports = function(eleventyConfig) {
  // Passthrough copy (optional)
  eleventyConfig.addPassthroughCopy("src/css");

  // Filter to format dates (optional)
  eleventyConfig.addFilter("date", function(date) {
    return new Date(date).toLocaleDateString();
  });

  return {
    dir: {
      input: "src",  // Content folder
      output: "_site"  // Build output folder
    }
  };
};
