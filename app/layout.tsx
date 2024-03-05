import './globals.css'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Pet Adoption',
  description: 'Web pet adoption',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
