"use client"

import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [isActive, setIsActive] = useState("brand-soul")

  const routes = [
    { id: 1, title: "Brand Soul", selectionId: "brand-soul", link: "#brand-soul" },
    { id: 2, title: "Building For Bharat", selectionId: "building-bharat", link: "#building-bharat" },
    { id: 3, title: "Learn with AG", selectionId: "learn", link: "#learn" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = routes.map((route) => route.selectionId)
      const currentSection = sections.find((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        const activeRoute = routes.find((route) => route.selectionId === currentSection)
        if (activeRoute) {
          setIsActive(activeRoute.title)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNav = () => {
    setNav((prevNav) => !prevNav)
  }
  const navbarHandle = (item: string) => {
    setIsActive(item)
  }
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div className='p-4'>
        <div className='flex items-center justify-between  bg-brand-green rounded-full p-3'>
          <div className='ml-4'>
            <Image src={"/img/logo.png"} alt='logo' width={122.88} height={27.36} className='object-cover ' />
          </div>

          <div className='hidden list-none sm:flex '>
            {routes.map((el) => (
              <Link href={el.link} key={el.link}>
                <p
                  onClick={() => navbarHandle(el.title)}
                  className={`ml-6 duration-300 rounded cursor-pointer px-3 py-1 
                  ${isActive === el.title ? "text-brand-white underline underline-offset-8 " : "text-brand-white"}`}
                >
                  {el.title}
                </p>
              </Link>
            ))}
          </div>

          <div className='hidden md:flex items-center bg-brand-white gap-3 text-sm font-semibold text-brand-green rounded-full px-4 py-2'>
            Works With Me
          </div>

          {/* mobile view */}
          <div className='flex md:hidden items-center gap-2 text-brand-white z-10'>
            <button className='p-2 ' onClick={handleNav}>
              {nav ? <XMarkIcon className='w-6 h-6' /> : <Bars3Icon className='w-6 h-6' />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-brand-grey text-brand-white  ease-in duration-300"
            : "sm:hidden absolute top-0 -left-full right-0 bottom-0 flex justify-center items-center w-full h-screen bg-brand-grey text-center ease-in duration-300"
        }
      >
        <ul>
          {routes.map((el) => (
            <li key={el.link} className='p-4 text-4xl hover:text-gray-500' onClick={handleNav}>
              <Link href={el.link} as={el.link}>
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
