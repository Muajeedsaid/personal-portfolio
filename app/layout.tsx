import './globals.css'

const siteUrl = 'https://personal-portfolio-538j.vercel.app'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Mujaheed Said Adam — Full Stack Web Developer',
  description: 'Full Stack Web Developer building fast, secure and scalable web applications. Available for freelance and full-time opportunities.',
  authors: [{ name: 'Mujaheed Said Adam' }],
  openGraph: {
    title: 'Mujaheed Said Adam — Full Stack Web Developer',
    description: 'Full Stack Web Developer building fast, secure and scalable web applications. Available for freelance and full-time opportunities.',
    url: siteUrl,
    siteName: 'Mujaheed Said Adam — Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mujaheed Said Adam — Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mujaheed Said Adam — Full Stack Web Developer',
    description: 'Full Stack Web Developer building fast, secure and scalable web applications. Available for freelance and full-time opportunities.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  )
}