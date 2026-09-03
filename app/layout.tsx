import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tatiane | Psicologia',
  description: 'Psicoterapia acolhedora baseada na Terapia Cognitivo-Comportamental.',
  openGraph: { title: 'Tatiane | Psicologia', description: 'Terapia Cognitivo-Comportamental com escuta e presença.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Tatiane | Psicologia', description: 'Terapia Cognitivo-Comportamental com escuta e presença.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
