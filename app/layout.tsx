import type { Metadata } from 'next';
import ClientWrapper from '@/components/ClientWrapper';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next Level Hackathon 2026 — Global Virtual Hackathon | $7,001 in Prizes',
  description: 'Global virtual hackathon open to everyone. $7,001 in cash prizes + internships. 24+ expert judges from Netflix, Meta, Amazon, Salesforce, Atlassian & more. AI/ML, Cloud, Web3, Cybersecurity, Data tracks. March 2026.',
  keywords: 'hackathon, global hackathon, AI hackathon, developers, professionals, students, nextdev-hackathon, 2026, prizes, online hackathon, open to everyone',
  openGraph: {
    title: 'Next Level Hackathon 2026 — $7,001 in Prizes',
    description: 'Build the next generation of AI, product innovation, and startup-ready solutions. Open to developers, designers, founders, and professionals worldwide.',
    type: 'website',
    url: 'https://nextdev-hackathon.devpost.com/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next Level Hackathon 2026',
    description: '$7,001 in prizes + internships. 24+ expert judges. Global online hackathon open to everyone.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@300;400;500&family=Epilogue:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientWrapper />
        {children}
      </body>
    </html>
  );
}
