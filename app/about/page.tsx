import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <Header />
      <main className='flex-grow container mx-auto p-4 md:p-6 lg:p-8'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4'>About Us</h1>
        <p className='text-xl text-center mb-8'>We're a team of dedicated professionals, passionate about testing out new and exciting stuff. We believe in continuous learning and sharing our experiences with the world.</p>
      </main>
      <Footer />
    </div>
  );
}
