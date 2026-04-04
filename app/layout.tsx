import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'リモートワーク',
  description: 'リモートワーク・在宅勤務情報',
  keywords: 'リモートワーク,リモートワーク・在宅勤務情報',
  openGraph: {
    title: 'リモートワーク',
    description: 'リモートワーク・在宅勤務情報',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'リモートワーク',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'リモートワーク',
    description: 'リモートワーク・在宅勤務情報',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="8c64b1447c588760" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
        <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:`{"@context": "https://schema.org", "@type": "WebSite", "name": "リモートワーク", "description": "リモートワーク・在宅勤務情報", "url": "https://remote-work-jp.vercel.app", "publisher": {"@type": "Organization", "name": "AOKAE合同会社", "url": "https://colorpass-web.vercel.app"}, "potentialAction": {"@type": "SearchAction", "target": "https://remote-work-jp.vercel.app/blog/{search_term_string}", "query-input": "required name=search_term_string"}}`}} />
      </head>
      <body>{children}</body>
    </html>
  )
}
