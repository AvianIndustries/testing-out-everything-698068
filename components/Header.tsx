import { Link } from 'next/link';

export default function Header() {
  return (
    <header className='bg-blue-600 text-white p-4 md:p-6 lg:p-8'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <a className='text-2xl md:text-3xl lg:text-4xl font-bold'>Testing Out Everything</a>
        </Link>
        <nav>
          <Link href='/about'>About</Link>
        </nav>
      </div>
    </header>
  );
}
