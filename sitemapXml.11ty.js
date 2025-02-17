exports.data = {
  permalink: "sitemap.xml",
};

exports.render = function (data) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 
  http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${data.collections.all
    .map(
      (page) => `<url>
  <loc>https://jameshfisher.com${page.url}</loc>
  <lastmod>${page.date.toISOString()}</lastmod>
  </url>`,
    )
    .join("\n")}
</urlset>
`;
};
