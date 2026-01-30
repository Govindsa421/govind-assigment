import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import Image from "next/image"

const PhilosophySection = () => {
  return (
    <section id='building-bharat'>
      <div className='px-6 py-16 bg-brand-green '>
        <div className='mx-auto max-w-7xl'>
          <div className='flex md:flex-row flex-col gap-8 items-center'>
            <div className='flex justify-center lg:justify-start'>
              <div className='relative rounded-xl border border-yellow-400/70 '>
                <div className='relative  rounded-lg overflow-hidden'>
                  <Image
                    src='/img/thumbnail1.jpg'
                    alt='Founder'
                    width={400}
                    height={532}
                    className='object-cover'
                    priority
                  />
                </div>
              </div>
            </div>

            <div className='flex-1 text-white w-full '>
              <p className='text-medium text-white/70 mb-3'>Building for Bharat</p>

              <h1 className='text-4xl md:text-6xl font-semibold leading-tight mb-6'>Join the Movement</h1>

              <p className='text-white/80 text-base mb-10 max-w-xl'>
                A movement to empower founders, creators, and dreamers from Tier 2 & 3 India. Building community,
                mindset, and digital tools to help them stay in the game.
              </p>

              <div className='mt-10 max-w-xl'>
                <p className='mb-4 font-medium'>Register Now</p>

                <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                  <input
                    type='text'
                    placeholder='name'
                    className='w-full px-4 py-3 rounded-md text-black bg-brand-white outline-none'
                  />
                  <input
                    type='email'
                    placeholder='email'
                    className='w-full px-4 py-3 rounded-md text-black bg-brand-white outline-none'
                  />
                </div>

                <button className='w-full py-3 rounded-md border cursor-pointer border-yellow-400 text-brand-white bg-brand-grey transition'>
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='bg-brand-grey text-brand-white px-6 py-16'>
          <p className='max-w-sm'>
            Every brand, every initiative, every experiment you see here — was born from one shared belief:
          </p>
          <div className='flex md:flex-row flex-col gap-8  mx-auto  mt-10 '>
            <Image
              src={`/img/img1.png`}
              alt='theumbanil1'
              width={333}
              height={592}
              className='md:w-83.25 w-full cursor-pointer'
            />
            <Image
              src={`/img/img4.png`}
              alt='theumbanil1'
              width={333}
              height={592}
              className='md:w-83.25 w-full cursor-pointer'
            />
            <Image
              src={`/img/img3.jpg`}
              alt='theumbanil1'
              width={333}
              height={592}
              className='md:w-83.25 w-full cursor-pointer'
            />
            <Image
              src={`/img/img2.png`}
              alt='theumbanil1'
              width={333}
              height={592}
              className='md:w-83.25 w-full cursor-pointer'
            />
          </div>

          <p className='flex gap-2 mt-10 justify-end cursor-pointer'>
            Checkout <ArrowUpRightIcon className='h-6 w-6 rounded-full bg-[#383838] p-1' />
          </p>
        </div>
      </div>
    </section>
  )
}

export default PhilosophySection
