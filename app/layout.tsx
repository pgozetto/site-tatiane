import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ variable: '--font-dm-sans', subsets: ['latin'] });
const playfair = Playfair_Display({ variable: '--font-playfair', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tatiane | Psicologia',
  description: 'Psicoterapia acolhedora baseada na Terapia Cognitivo-Comportamental.',
  openGraph: { title: 'Tatiane | Psicologia', description: 'Terapia Cognitivo-Comportamental com escuta e presença.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Tatiane | Psicologia', description: 'Terapia Cognitivo-Comportamental com escuta e presença.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${dmSans.variable} ${playfair.variable}`}>{children}</body></html>;
}
