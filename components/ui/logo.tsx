import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/'>
      <div className='text-base font-bold  uppercase'>
        {/* LA */}
        LA Bollywood
      </div>
    </Link>
  );
}
