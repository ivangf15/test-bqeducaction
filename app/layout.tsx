import Footer from '@/components/Footer';
import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'Next Test BQEducation',
  description: 'Demo técnica con Next.js, TypeScript y TailwindCSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
