import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gulfstream Framing',
  description: 'Gulfstream Framing brings the discipline of the metals industry to coastal construction.'
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
