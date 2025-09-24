import Image from 'next/image';
import PageIllustration from '@/components/page-illustration';
import Avatar01 from '@/public/images/team/shannon.jpg';
import Avatar02 from '@/public/images/team/ekta.png';
import Avatar03 from '@/public/images/team/heart.jpg';
import Avatar04 from '@/public/images/team/saleena.png';
import Avatar05 from '@/public/images/team/shayan.jpg';
import Avatar06 from '@/public/images/team/laylee.png';

export default function HeroHome() {
  return (
    <section className='relative'>
      <PageIllustration />
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        {/* Hero content */}
        <div className='pb-12 pt-32 md:pb-20 md:pt-40'>
          {/* Section header */}
          <div className='pb-12 text-center md:pb-16'>
            <div
              className='mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]'
              data-aos='zoom-y-out'
            >
              <div className='-mx-0.5 flex justify-center -space-x-3'>
                <Image
                  className='box-content rounded-full border-2 border-gray-50'
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt='Avatar 01'
                />
                <Image
                  className='box-content rounded-full border-2 border-gray-50'
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt='Avatar 01'
                />
                <Image
                  className='box-content rounded-full border-2 border-gray-50'
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt='Avatar 02'
                />
                <Image
                  className='box-content rounded-full border-2 border-gray-50'
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt='Avatar 03'
                />
                <Image
                  className='box-content rounded-full border-2 border-gray-50'
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt='Avatar 04'
                />
                <Image
                  className='box-content rounded-full border-2 border-gray-50'
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt='Avatar 05'
                />
              </div>
            </div>
            <h1
              className='mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl'
              data-aos='zoom-y-out'
              data-aos-delay={150}
            >
              Top Indian Bollywood <br className='max-lg:hidden' />
              Dance Entertainment
            </h1>
            <div className='mx-auto max-w-3xl'>
              <p
                className='mb-8 text-lg text-gray-700'
                data-aos='zoom-y-out'
                data-aos-delay={300}
              >
                We bring the vibrant spirit of India and the Middle East to life
                through 20+ years of world-class dance. From weddings to
                corporate events and Film/TV, our team delivers unforgettable
                performances that blend tradition, modern flair, and pure magic.
              </p>
              <div className='relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]'>
                <div
                  className='mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center'
                  data-aos='zoom-y-out'
                  data-aos-delay={450}
                >
                  <a
                    className='btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto'
                    href='mailto:labollywoodinfo@gmail.com'
                  >
                    <span className='relative inline-flex items-center'>
                      Book Today
                      <span className='ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5'>
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className='btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto'
                    href='#learn-more'
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          {/* Hero image */}
          <div
            className='mx-auto max-w-3xl'
            data-aos='zoom-y-out'
            data-aos-delay={600}
          >
            <Image
              src='/images/hero.png'
              alt='LA Bollywood Hero'
              width={1200}
              height={675}
              className='rounded-2xl shadow-xl'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
