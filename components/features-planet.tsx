import Image from 'next/image';
import PlanetImg from '@/public/images/planet.png';
import PlanetOverlayImg from '@/public/images/planet-overlay.svg';

const services = [
  {
    number: '01',
    name: 'LA BOLLYWOOD PACKAGE',
    image: '/images/services/la-bollywood-package.jpg',
    description:
      'As our most requested show, our L.A. Bollywood package is perfect for weddings, Sangeets, and cultural events. Looking to add some Bollywood flair to your event? Look no further! Our talented dancers will dazzle you with the latest hits from your favorite films, bringing the best of Bollywood cinema right to your doorstep.',
  },
  {
    number: '02',
    name: 'DIWALI  PACKAGE',
    image: '/images/services/diwali-package.png',
    description:
      'Celebrate the festival of lights with us and experience the magic of Diwali, our vibrant and energetic Bollywood dance performances, live music, and cultural activities. We love sharing our light and love of Indian music and culture with you.',
  },
  {
    number: '03',
    name: 'HOLI PACKAGE',
    image: '/images/services/holi-package.png',
    description:
      'Add some color and fun celebration to your Holi event with our professional Bollywood dancers! Our Holi Show is just as colorful as the festival itself, bringing joy and excitement to your guests.',
  },
  {
    number: '04',
    name: 'BHANGRA FUSION  PACKAGE',
    image: '/images/services/bhangra-fusion-package.jpg',
    description:
      'Our Bhangra Fusion Show is a one-of-a-kind experience that blends genres and cultures to create an upbeat performance perfect for any event. Get ready to dance and be entertained by our talented performers!',
  },
  {
    number: '05',
    name: 'BELLYDANCE FUSION PACKAGE',
    image: '/images/services/bellydance-fusion-package.png',
    description:
      'Our widely popular Bellydance show seamlessly fuses the sensuality and elegance of the Middle East with the vibrancy of Bollywood. If you want a little of both, this mesmerizing fusion show will surely captivate your guests!',
  },
  {
    number: '06',
    name: 'MIXED CULTURE  PACKAGE',
    image: '/images/services/mixed-culture-package.jpg',
    description:
      'Are you a multi-ethnic wedding couple and want something special to celebrate all of your cultures? Or maybe you want a variety show that just has it all!  This show is the perfect addition to any mixed culture event. We incorporate a variety of dance styles according to your requests! Fusion shows we’ve done in the past include Persian, Indian, Arab, Polynesian, Latin, Brazilian, and Fire. Fusion shows create a truly unique and memorable experience to honor all of your guests!',
  },
  {
    number: '07',
    name: 'AFTER HOURS PACKAGE',
    image: '/images/services/after-hours-package.jpg',
    description:
      'Tired of the same old typical Bollywood Show and want something different? If you’re looking for a NOT SO family friendly show, look no further! Our After Hours Show explores the adult side of Bollywood which includes Cabaret, Mujra, Burlesque and more playful elements meant to excite and titillate!',
  },
  {
    number: '08',
    name: 'FIRE!',
    image: '/images/services/fire.png',
    description:
      'Ready to light things up? Our Bollywood Fire Add On service is perfect for those who are truly ready to impress their guests. Our fire dancers perform to your favorite Bollywood hits, all while dancing with fire!',
  },
  {
    number: '09',
    name: 'DHOL PLAYER ',
    image: '/images/services/dhol-player.png',
    description:
      "Looking to add some excitement to your event? Our talented dhol players are ready to bring the beats! Whether it's a wedding, cultural event, or bharat, our dhol players are some of the best in the country. Call us today to book your live music experience!",
  },
  {
    number: '10',
    name: 'GARLAND GREETINGS',
    image: '/images/services/garland-greetings.png',
    description:
      'Make a stunning first impression at your event by greeting your guests with fresh flower garlands! Ask us about our jasmine or marigold flower garlands to add a touch of and beauty to your special occasion.',
  },
  {
    number: '11',
    name: 'BHARAT CROWD HYPE!',
    image: '/images/services/bharat-crowd-hype.png',
    description:
      "We know that indian weddings can start early, and sometimes the chai hasn't kicked in! Not to worry because our dancers and dhol players will help kick off the party, no matter what time your bharat begins!",
  },
  {
    number: '12',
    name: 'SITAR PLAYER',
    image: '/images/services/sitar-player.png',
    description:
      'Add a touch of class and elegance to your event with a professional sitar player. Serenade your guests with the authentic sounds of an Indian sitar, creating a mesmerizing ambiance that will leave your guests amazed.',
  },
];

export default function FeaturesPlanet() {
  return (
    <section id='learn-more' className='relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='py-12 md:py-20'>
          {/* Section header */}
          <div className='mx-auto max-w-3xl pb-16 text-center md:pb-20'>
            <h2 className='text-3xl font-bold text-gray-200 md:text-4xl'>
              We're not your average Dance Company and we love keeping things
              interesting!
            </h2>
          </div>

          {/* Planet */}
          <div className='pb-16 md:pb-20' data-aos='zoom-y-out'>
            <div className='text-center'>
              <div className='relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]'>
                <Image
                  className='rounded-full bg-gray-900'
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt='Planet'
                />

                {/* Overlay decoration */}
                <div className='pointer-events-none' aria-hidden='true'>
                  <Image
                    className='absolute -right-64 -top-20 z-10 max-w-none'
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt='Planet decoration'
                  />

                  {/* Floating text tags */}
                  <div className='absolute -left-28 top-16 z-10 flex items-center justify-center p-2 w-[200px] h-[48px] rounded-md bg-gray-700/70 text-white text-sm font-medium animate-[float_4s_ease-in-out_infinite_both] opacity-70 transition-opacity duration-500 shadow-lg backdrop-blur-md'>
                    Global Reach
                  </div>
                  <div className='absolute left-56 top-7 z-10 flex items-center justify-center p-2 w-[200px] h-[48px] rounded-md bg-indigo-700/70 text-white text-sm font-medium animate-[float_4s_ease-in-out_infinite_1s_both] opacity-70 transition-opacity duration-500 shadow-lg backdrop-blur-md'>
                    Cultural Fusion
                  </div>
                  <div className='absolute -left-20 bottom-24 z-10 flex items-center justify-center p-2 w-[200px] h-[48px] rounded-md bg-emerald-700/70 text-white text-sm font-medium animate-[float_4s_ease-in-out_infinite_2s_both] opacity-70 transition-opacity duration-500 shadow-lg backdrop-blur-md'>
                    Profesional Performers
                  </div>
                  <div className='absolute bottom-32 left-64 z-10 flex items-center justify-center p-2 w-[200px] h-[48px] rounded-md bg-pink-700/70 text-white text-sm font-medium animate-[float_4s_ease-in-out_infinite_3s_both] opacity-70 transition-opacity duration-500 shadow-lg backdrop-blur-md'>
                    Customizable Shows
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid for services */}
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {services.map((service) => (
              <div
                key={service.number}
                className='relative bg-gray-800/60 rounded-xl p-6 shadow-lg transition hover:shadow-xl'
              >
                <div className='relative w-full h-40 mb-4'>
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className='object-cover rounded-lg'
                  />
                </div>
                <h3 className='text-xl font-semibold text-white mb-2'>
                  {service.number}. {service.name}
                </h3>
                <p className='text-gray-300 text-sm'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
