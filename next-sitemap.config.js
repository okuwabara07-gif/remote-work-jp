/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://remote-work-jp.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ['https://remote-work-jp.vercel.app/sitemap.xml'],
  },
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
}
