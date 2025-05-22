import Link from "next/link"
import Image from "next/image"


const Footer = () => {
    return (
      <div className="w-full px-1 py-1 bg-[#263e57] sm:px-12 border-t-1 border-white" >
         
         <section className="flex flex-col items-center justify-center m-8">
            <div className="flex gap-4 justify-center sm:justify-start">
                  <Image src="/facebook.svg" alt="logo" width={30} height={30}  />
                  <Image src="/instagram.svg" alt="logo" width={30} height={30}  />
              </div>
          </section>
          
          <hr className="border-white border-opacity-50 w-4/5 mx-auto mt-0 mb-10"/>

        <div className=" flex flex-wrap items-start mt-10 justify-center gap-3 sm:gap-40">
          <section className='flex flex-col items-center text-center'>
            <h2 className="text-white text-2xl font-bold mb-5">Om oss</h2>
            <div className="flex flex-col gap-2 max-w-[200px] sm:max-w-none mx-auto sm:mx-0">
              <p className="text-white text-left text-xs w-48 pb-3">Vi är ett byggföretag som erbjuder tjänster inom bygg och renovering.</p>
              <Link className="hover:text-[#4c6cd3] text-xs text-white" href="/integritetspolicy">- Integritetspolicy</Link>
              <Link className="hover:text-[#4c6cd3] text-xs text-white" href="/cookiespolicy"> - Cookies</Link>
            </div>
          </section>

          <section className='flex flex-col items-center text-center'>
            <h2 className="text-white text-2xl font-bold mb-5">Kontakta oss</h2>
            <div className="max-w-[200px] text-left sm:max-w-none mx-auto sm:mx-0">
                <p className="text-white text-xs"><strong>Adress:</strong> Lövvägen 4, 468 30, Vargön</p>
                <p className="text-white text-xs"><strong>Telefon:</strong> +46 73-500 27 33</p>
                <p className="text-white text-xs"><strong>Mejl:</strong> info@allbyggtrestad.se</p>
              </div>
          </section>

          <section className="flex-col items-center text-center hidden mt-10 sm:mt-0 sm:flex">
            <h2 className="text-white text-2xl font-bold mb-5">Navigation</h2>
            <nav className="flex gap-2 justify-center sm:justify-start flex-col">
                <Link className="hover:text-[#4c6cd3] text-white" href="/">HEM</Link>
                <Link className="hover:text-[#4c6cd3] text-white" href="/about">OM OSS</Link>
                <Link className="hover:text-[#4c6cd3] text-white" href="/offer">TJÄNSTER</Link>
                <Link className="hover:text-[#4c6cd3] text-white" href="/contact">KONTAKT</Link>
            </nav>
          </section>
        </div>

        <hr className="border-white border-opacity-50 w-4/5 mx-auto mt-10 mb-10"/>

        <div className="flex flex-row items-center justify-center gap-1">
         <Image src="/logo_light.png" alt="logo" width={70} height={70}  />
          <section>
            <p className="text-white text-xs">© 2025 Allbygg Trestad AB </p>
            <p className="text-white text-xs">All rights reserved </p>
            <p className="text-white text-xs">Org.nr 559056-1782 </p>
          </section>
        </div>

        <div className=" flex flex-col items-center justify-center pb-3 pt-10  text-white text-center">
          <p className="text-sm mt-2 flex flex-wrap items-center justify-center gap-1">
            Gillar du hemsidan? Skaffa en egen! →
          <Link href="https://www.gaspardev.com" className="text-[#7fc7ff] hover:underline">
            www.gaspardev.com
          </Link>
          </p>
        </div>
      </div>
    )
  }
  
  export default Footer