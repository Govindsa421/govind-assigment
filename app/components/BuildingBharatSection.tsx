import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import Image from "next/image"

const BuildingBharatSection = () => {
  return (
    <section id='learn' className=' bg-brand-white md:px-8 px-6 md:py-16 py-8'>
      <div className='flex md:flex-row flex-col bg-brand-green '>
        <div className='flex'>
          <Image src={`/img/contact.jpg`} alt='learn' width={400} height={500} />
        </div>
        <div className=' flex-1 md:px-20 px-6 md:py-20 py-10   '>
          <h2 className='md:text-[81px] text-[40px] font-bold text-brand-white'>Let’s Connect</h2>
          <p className='text-brand-white/90 mt-4'>
            Do you have a idea that you want to bring to life , Then this the right time for us to connect
          </p>

          <div>
            <div className='text-brand-white mt-24 cursor-pointer'>
              <p className='flex gap-4'>
                Book a appointment <ArrowUpRightIcon className='h-6 w-6 rounded-full bg-[#2a4b47]  p-1' />
              </p>
            </div>
            <div className='flex   gap-4 md:justify-end justify-start md:0 mt-7'>
              <div className=' cursor-pointer'>
                <Image src={`/img/instagram.png`} alt='instagram' width={20} height={20} className='invert ' />
              </div>

              <div className=' cursor-pointer'>
                <Image src={`/img/linkedin.png`} alt='instagram' width={20} height={20} className='invert ' />
              </div>

              <div className=' cursor-pointer'>
                <Image src={`/img/facebook.png`} alt='instagram' width={20} height={20} className='invert ' />
              </div>

              <div className=' cursor-pointer'>
                <Image src={`/img/youtube.png`} alt='instagram' width={20} height={20} className='invert ' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuildingBharatSection
