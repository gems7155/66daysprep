import { ColorModeScript, theme } from '@chakra-ui/react'
import { Metadata } from 'next'

import { Provider } from './provider'

export const metadata: Metadata = {
  title: '66 Days Prep - AI-Powered Career Coach',
  description: '66 Days Prep is the leading AI-powered career coach and daily tracking tool that helps you stay consistent, build interview skills, and prepare for careers in banking and consulting in just 66 days.',
  openGraph: {
    title: '66 Days Prep - AI-Powered Career Coach',
    description: '66 Days Prep is the leading AI-powered career coach and daily tracking tool that helps you stay consistent, build interview skills, and prepare for careers in banking and consulting in just 66 days.',
    siteName: '66 Days Prep',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '66 Days Prep - AI-Powered Career Coach',
    description: '66 Days Prep is the leading AI-powered career coach and daily tracking tool that helps you stay consistent, build interview skills, and prepare for careers in banking and consulting in just 66 days.',
  },
}

export default function Layout(props: { children: React.ReactNode }) {
  const colorMode = theme.config.initialColorMode

  return (
    <html lang="en" data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
      </head>
      <body className={`chakra-ui-${colorMode}`}>
        <ColorModeScript initialColorMode={colorMode} />
        <Provider>{props.children}</Provider>
      </body>
    </html>
  )
}
