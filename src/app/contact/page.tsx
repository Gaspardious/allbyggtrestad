
import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className='w-full pb-10 bg-blue-50 relative '>
        <div className="relative h-[300px] w-full bg-cover bg-center bg-no-repeat bg-[url('/tools.jpg')]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>


        <div className="flex flex-wrap md:flex md:flex-row justify-center items-center gap-5 absolute top-60 w-full">
        <div className='relative flex flex-col p-2 items-center justify-center gap-5 shadow-xl bg-white w-38 h-30 rounded-lg '>
          <Image src='/position.svg' alt='logo' width={25} height={25} className='absolute top-2 left-2' />
          <p className='text-black text-sm font-bold'>Adress:</p>
          <p className='text-black text-xs'>Lövvägen 4, <br /> 468 30, Vargön</p>
        </div>
        <div className='relative flex flex-col items-center justify-center gap-5 shadow-xl bg-white w-38 h-30 rounded-lg'>
          <Image src='/phone.svg' alt='logo' width={25} height={25} className='absolute top-2 left-2' />
          <p className='text-black text-sm font-bold'>Telefon:</p>
          <p className='text-black text-xs'>+46 73-500 27 33</p>
        </div>
        <div className='relative flex flex-col items-center justify-center gap-5 shadow-xl bg-white w-38 h-30 rounded-lg'>
          <Image src='/email.svg' alt='logo' width={20} height={20} className='absolute top-2 left-2' />
          <p className='text-black text-sm font-bold'>Mail:</p>
          <p className='text-black text-xs'>info@allbyggtrestad.se</p>
        </div>

      </div>
      

      <h1 className="text-3xl mt-10 sm:text-6xl font-extrabold text-white absolute top-20 left-1/2 transform -translate-x-1/2">Kontakta oss</h1>
 
      <div className="flex flex-col items-center justify-center h-full gap-2 mt-50 sm:mt-20">
        <p className="text-[#263e90] text-center p-5">Mejla oss eller ring oss! <br /> Vi besvarar samtliga mejl inom 24 timmar. Skulle vi inte svara när ni ringer - avvakta så återkommer vi så fort vi kan.</p>
        <p className="text-[#263e90] text-center"><strong>Kundansvarig:</strong> Emin Kahirman </p>
        <p className="text-[#263e90] text-center"><strong>Telefon:</strong> +46 73-500 27 33</p>
      </div>
    </div>
  )
}

export default Contact