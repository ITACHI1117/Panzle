/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://panzle.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/404"],
  generateIndexSitemap: false,

  // 👇 Add custom sections for your single-page layout
  additionalPaths: async (config) => {
    const base = config.siteUrl;
    const sections = [
      "/#about",
      "/#services",
      "/#contact",
      "/#reviews",
      "/#team",
    ];
    return Promise.all(
      sections.map((path) =>
        config.transform(config, path.replace(/\/\//, "/"))
      )
    );
  },
};
