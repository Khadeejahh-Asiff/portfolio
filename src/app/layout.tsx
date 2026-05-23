import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';
import CustomCursor from '@/components/custom-cursor';
import { StructuredData } from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://khadeeja-portfolio.vercel.app'),
  title: 'Khadeeja Asif - Software Engineer',
  description:
    'MERN Stack Developer skilled in React, Next.js, TypeScript, and Node.js. Building responsive, scalable web applications in Lahore, Pakistan.',
  keywords: [
    'Software Engineer',
    'MERN Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'Web Development',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'Portfolio',
    'Lahore',
    'Pakistan',
  ],
  authors: [{ name: 'Khadeeja Asif' }],
  creator: 'Khadeeja Asif',
  publisher: 'Khadeeja Asif',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://khadeeja-portfolio.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://khadeeja-portfolio.vercel.app',
    title: 'Khadeeja Asif - Software Engineer',
    description:
      'MERN Stack Developer skilled in React, Next.js, TypeScript, and Node.js. Building responsive, scalable web applications.',
    siteName: 'Khadeeja Asif Portfolio',
    images: [
      {
        url: '/me.jpeg',
        width: 1200,
        height: 630,
        alt: 'Khadeeja Asif - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khadeeja Asif - Software Engineer',
    description:
      'MERN Stack Developer skilled in React, Next.js, TypeScript, and Node.js.',
    images: ['/me.jpeg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0c0c0e" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <StructuredData />
      </head>
      <body className={`${inter.variable} font-sans antialiased site-background`}>
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          <Navigation />
          <main role="main">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
