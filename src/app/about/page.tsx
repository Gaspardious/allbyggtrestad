
import React from 'react'

const about = () => {
  return (
      <div className='w-full pb-10 bg-blue-50 relative '>
          <div className="relative h-[300px] w-full bg-cover bg-center bg-no-repeat bg-[url('/drill.jpg')]">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        <h1 className="text-3xl h-screen mt-5 sm:text-6xl font-extrabold text-white absolute top-20 left-1/2 transform -translate-x-1/2">Om oss</h1>
       
        <div className="flex flex-col items-center justify-center h-full gap-5"> 
          <h2 className='text-2xl text-black pt-10 font-bold'>Kort om oss</h2>
          <p className='text-black w-3/4 sm:text-lg sm:w-2/4'> 
            Allbygg Trestad AB är ett företag som bygger och renoverar hus. Vi har varit på marknaden i  snart 10 år och har byggt och renoverat allt från hus till badrum och altaner.
            Vi har en stor erfarenhet av bygg- och renoveringsprojekt och vi är stolta över att kunna erbjuda högkvalitativa tjänster till våra kunder.
            <br /> <br />
          </p>

          <h2 className='text-2xl text-black font-bold'>Varför välja oss?</h2>
          <p className='text-black w-3/4 sm:text-lg sm:w-2/4 p-0 m-0'>
          <strong className='underline decoration-2 decoration-blue-500'>Dokumenterad</strong> god erfarenhet av bygg- och renoveringsprojekt. Ta inte vårt ord för det. Vi kan visa dig våra tidigare projekt och alla våra tidigare nöjda kunder! 😁
          </p>


        </div>
      </div>
  )
}

export default about