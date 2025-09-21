import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Link } from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/about');
  }, []);

  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <Header />
      <main className='flex-grow container mx-auto p-4 md:p-6 lg:p-8'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4'>Welcome to Testing Out Everything</h1>
        <p className='text-xl text-center mb-8'>Your one-stop solution for trying out new and exciting stuff! Stay tuned for regular updates.</p>
        <Link href='/about'>Learn more about us</Link>
      </main>
      <Footer />
    </div>
  );
}
