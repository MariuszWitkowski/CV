const htmlmin = require('html-minifier');

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('assets'); // If you have any static assets
  eleventyConfig.addTransform('htmlmin', function (content) {
    // Prior to Eleventy 2.0: use this.outputPath instead
    if (this.page.outputPath && this.page.outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: 'src',
      output: 'docs',
    },
  };
};
