import Image from "next/image"

const Footer = () => {
  return (
    <div className=''>
      <div className='bg-brand-grey text-brand-white px-6 py-10'>
        <div className='flex md:justify-between flex-col sm:flex-row'>
          <div
            className='bg-linear-to-r
    from-[#fff]
    via-[#F5C97A]
    to-[#F6D365]
    bg-clip-text
    text-transparent
    text-lg
    w-60
    '
          >
            <p>{`Maybe it’s time we build something together.`}</p>
          </div>

          <div className='flex flex-col md:justify-between sm:flex-row  gap-16 mt-10 md:mt-0 '>
            <div>
              <ul className='space-y-2 md:space-y-4'>
                <li>about</li>
                <li>work</li>
                <li>services</li>
                <li>contact</li>
              </ul>
            </div>
            <div>
              <ul className='space-y-2 md:space-y-4'>
                <li>diigiihost</li>
                <li>quote your price</li>
                <li>best rate websites</li>
                <li></li>
              </ul>
            </div>
            <div>
              <ul className='space-y-2 md:space-y-4'>
                <li>instagram</li>
                <li>facebook</li>
                <li>youtube</li>
                <li>linkedin</li>
                <li>X</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex md:justify-between text-center md:flex-row flex-col md:pt-32 pt-12'>
          <div>
            <Image src={`/img/logo.png`} alt='logo' width={256} height={57} />
          </div>
          <div className='order-1 md:order-2 md:pt-0 pt-6'>
            <p className=''>copyright©{new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
