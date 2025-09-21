export default function Footer() {
  return (
    <footer className='bg-blue-600 text-white p-4 md:p-6 lg:p-8'>
      <div className='container mx-auto text-center'>
        <p>&copy; {new Date().getFullYear()} Testing Out Everything. All rights reserved.</p>
      </div>
    </footer>
  );
}
