"use client"

import { ArrowUpRightIcon } from "@heroicons/react/16/solid"
import Image from "next/image"

const HeroSection = () => {
  return (
    <section className=''>
      <div
        id='brand-soul'
        className='md:min-h-screen md:pt-0 pt-32 flex items-center justify-center bg-brand-white relative overflow-hidden px-4 sm:px-6 lg:px-8'
      >
        <div className='w-full'>
          <h1
            className='font-anton tracking-wider
              text-[15vw] sm:text-[14vw] md:text-[16vw] lg:text-[20.2vw] 
              font-extrabold
              leading-[0.9] sm:leading-[1]
              text-transparent
              bg-clip-text
              bg-center
              bg-cover
              select-none
              text-center
            '
            style={{
              backgroundImage: "url('/img/banner.jpg')",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            BRANDSOUL
            <br />
            ALCHEMIST
          </h1>
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-6 py-6 px-4 sm:px-6 lg:px-8'>
        <div className='text-brand-grey font-medium text-sm sm:text-base lg:text-lg'>
          <p>Bringing out the soul within every brand where</p>
          <p>meaning, emotion, and identity become one.</p>
        </div>
        <div>
          <button className='flex items-center gap-2 text-sm sm:text-base bg-brand-green rounded-full text-brand-white pl-4 sm:pl-6 pr-2 py-2 hover:bg-brand-green/90 transition-colors whitespace-nowrap'>
            {`Let's Connect`}
            <ArrowUpRightIcon className='h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-green-900 p-1 shrink-0' />
          </button>
        </div>
      </div>

      <div className='space-y-0'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 border-t border-gray-200'>
          <p className='text-2xl sm:text-3xl lg:text-[48px] font-medium'>01</p>
          <p className='text-3xl sm:text-4xl lg:text-[64px] font-medium sm:flex-1 sm:text-center'>
            Brand Soul Philosophy
          </p>
          <button className='flex items-center gap-2 text-sm sm:text-base group'>
            Explore More
            <ArrowUpRightIcon className='h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#c1c9c8] text-brand-green p-1 group-hover:bg-brand-green group-hover:text-white transition-colors' />
          </button>
        </div>

        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-brand-green text-brand-white px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10'>
          <p className='text-2xl sm:text-3xl lg:text-[48px] font-medium'>02</p>
          <p className='text-3xl sm:text-4xl lg:text-[64px] font-medium sm:flex-1 sm:text-center'>
            Building for Bharat
          </p>
          <button className='flex items-center gap-2 text-sm sm:text-base group whitespace-nowrap'>
            Join the Movement
            <ArrowUpRightIcon className='h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#2a4b47] p-1 group-hover:bg-white group-hover:text-brand-green transition-colors flex-shrink-0' />
          </button>
        </div>

        <div className='bg-brand-grey px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10'>
          <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-brand-white mb-8 sm:mb-12 lg:mb-16'>
            <p className='text-2xl sm:text-3xl lg:text-[48px] font-medium'>03</p>
            <p className='text-3xl sm:text-4xl lg:text-[64px] font-medium sm:flex-1 sm:text-center'>Learn with AG</p>
            <button className='flex items-center gap-2 text-sm sm:text-base group'>
              Checkout
              <ArrowUpRightIcon className='h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#383838] p-1 group-hover:bg-white group-hover:text-brand-grey transition-colors' />
            </button>
          </div>

          <p className='text-brand-white md:w-110 w-auto  md:mt-40 mt-10'>
            Where behavioral science meets emotion. From brand strategy and digital infrastructure to Image Engineering
            this is how we build brands that move people and grow with integrity.
          </p>

          <div className='flex md:flex-row flex-col justify-end  gap-5 mb-10 mt-10'>
            <div>
              <Image
                src={`/img/img1.png`}
                alt='thumbnail1'
                width={199.68}
                height={355}
                className='md:w-[199.68px] w-full'
              />
            </div>
            <div>
              <Image
                src={`/img/img2.png`}
                alt='thumbnail2'
                width={199.68}
                height={355}
                className='md:w-[199.68px] w-full'
              />
            </div>
            <div>
              <Image
                src={`/img/img3.jpg`}
                alt='thumbnail3'
                width={199.68}
                height={355}
                className='md:w-[199.68px] w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
