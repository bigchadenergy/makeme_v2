import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gulfstream Framing',
  description:
    'Precision framing inspired by Gulfstream Metals. Structural framing systems for Florida\'s Gulf Coast.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
