import Link from 'next/link';
import Logo from './logo';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? 'border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]' : ''}`}
        >
          {/* 1st block */}
          <div className='space-y-2 sm:col-span-12 lg:col-span-4'>
            <div>
              <Logo />
            </div>
            <div className='text-sm text-gray-600'>
              &copy; LA Bollywood.com - All rights reserved.
            </div>
          </div>

          {/* 2nd block */}
          <div className='space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2 hidden sm:block'></div>

          {/* 3rd block */}

          <div className='space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2 hidden sm:block'></div>

          {/* 4th block */}

          <div className='space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2 hidden sm:block'></div>

          {/* 5th block */}
          <div className='space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h3 className='text-sm font-medium'>Social</h3>
            <ul className='flex gap-1'>
              <li>
                <a
                  className='flex items-center justify-center text-blue-500 transition hover:text-blue-600'
                  href='https://www.facebook.com/LABOLLYWOODENT/'
                  target='_blank'
                  aria-label='Facebook'
                >
                  <Facebook />
                </a>
              </li>
              <li>
                <a
                  className='flex items-center justify-center text-blue-500 transition hover:text-blue-600'
                  href='https://www.youtube.com/@LABOLLYWOOD'
                  target='_blank'
                  aria-label='Youtube'
                >
                  <Youtube />
                </a>
              </li>
              <li>
                <a
                  className='flex items-center justify-center text-blue-500 transition hover:text-blue-600'
                  href='https://www.instagram.com/labollywood/?hl=en'
                  target='_blank'
                  aria-label='Instagram'
                >
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Big text */}

      <div className='relative -mt-16 h-60 w-full' aria-hidden='true'>
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Bollywood'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Bollywood'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div
          className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3'
          aria-hidden='true'
        >
          <div className='h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]'></div>
        </div>
      </div>
    </footer>
  );
}
