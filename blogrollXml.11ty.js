const blogroll = require("./blogroll.js");

exports.data = {
  permalink: "blogroll.xml",
};

exports.render = function (data) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <opml version="1.0">
      <head>
          <title>Jim's blogroll</title>
      </head>
      <body>
        ${blogroll
          .filter((blog) => blog.xmlUrl)
          .map(
            (blog) =>
              `<outline type="rss" xmlUrl="${blog.xmlUrl}" htmlUrl="${blog.htmlUrl}" title="${blog.title}"/>`,
          )
          .join("\n")}
      </body>
  </opml>`;
};
