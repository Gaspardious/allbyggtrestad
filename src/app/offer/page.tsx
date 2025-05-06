
import React from 'react'
import Info from '../../../components/Info/Info'

const Offer = () => {
  return (
    <div className='w-full relative '>
      <div className="relative h-[300px] w-full bg-cover bg-center bg-no-repeat bg-[url('/bath.jpg')]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <section className=" bg-white flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-sm sm:text-2xl font-extralight pt-10 text-gray-600 ">ALLBYGG TRESTAD AB</h1>
            <h2 className="text-xl sm:text-3xl p-5 text-black m-5 w-full lg:w-1/2"> Vi erbjuder tjänster inom bygg och renovering.
              Vi har lång erfarenhet och kan hjälpa dig med allt från badrum, köksrenovering, altan, garage till nybyggnation av hus. <br /> <br /> 
              Kontakta oss för ett första - <span className='underline decoration-blue-500'>gratis och förutsättningslöst</span> - möte. 👷🏻
            </h2>
        </section>

        <h1 className="text-3xl h-screen mt-5 sm:text-6xl font-extrabold text-white absolute top-20 left-1/2 transform -translate-x-1/2">Tjänster</h1>
        <div className='w-full p-5 sm:p-20 bg-blue-50 relative '>
        <Info BigText="Badrum" SmallText="Vi har renoverat badrum sedan 2016. Låt oss hjälpa dig med ditt badrum."
        ImageSrc="/badrum2.jpg" BtnText="Kontakta oss"/>
        <Info BigText="Altan" SmallText="Altaner är en värdefull del av ditt hus. Vi kan bygga altanen från grunden eller hjälpa dig bygga ut din nuvarande altan."
        reverse ImageSrc="/altan2.jpg" BtnText="Kontakta oss"/>
        <Info BigText="Bygga hus?" SmallText="Vi kan bygga hus eller hjälpa till med utbyggnader. Ta ett första möte med oss så kan vi hjälpa dig med ditt projekt." 
        ImageSrc="/house.jpg" BtnText="Kontakta oss"/>
      </div>
    </div>
  )
}

export default Offer