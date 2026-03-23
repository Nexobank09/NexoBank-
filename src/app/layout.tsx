import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NexoBank',
  description: 'Banque digitale internationale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
