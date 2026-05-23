import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Algorithm 3D Visualizer — Turn Complex Algorithms into Interactive 3D Visualizations',
  description: 'Interactive 3D visualizations of data structures and algorithms for CS educators and students. Learn sorting, graphs, trees, and more with stunning 3D animations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="15f93543-8a98-4c2f-9081-2ce0c719a823"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
