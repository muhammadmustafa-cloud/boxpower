import React from 'react'
import Navbar from '../_components/Navbar'
import { Button } from '@/components/ui/button'
import heroImage from '../../../public/hero-image.png'
import step1 from '../../../public/step-image-1.png'
import step2 from '../../../public/step-image-2.png'
import step3 from '../../../public/step-image-3.png'
import tile1 from '../../../public/tile-image-1.png'
import tile2 from '../../../public/tile-image-2.png'
import tile3 from '../../../public/tile-image-3.png'
import Image from 'next/image'
const page = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center mt-10 w-[80%] mx-auto'>
        <div className='flex flex-col w-1/2 gap-6'>
          <h1 className='text-4xl w-[80%] font-medium text-heading'>Optimize a system for your load the EASI way</h1>
          <p className='text-paraText w-[80%] text-sm font-normal leading-6'>BoxPower’s Energy Audit & System Integration Software(EASI) is a cloud based tool designed to simplify both system design and the financial return analysis needed for organizations to explore renewable energy solutions to their energy needs.</p>
          <div>
            <Button>GET STARTED NOW</Button>
          </div>
        </div>
        <div className='w-1/2'>
          <Image className='max-w-[110%]' src={heroImage} alt='hero-image' />
        </div>
      </div>

      {/* Our Product */}
      <div className='w-[60%] mx-auto flex flex-col justify-center items-center gap-8 mt-24'>
        <h1 className='text-4xl text-heading font-medium'>Our Product</h1>
        <p className='text-paraText text-sm font-normal flex leading-7'> BoxPower’s Energy Audit & System Integration Software(EASI) is a cloud based tool designed to simplify both system design and the financial return analysis needed for organizations to explore renewable energy solutions to their energy needs. By combining an end user facing mobile/web application with advanced computational modeling, EASI is able to quickly, yet effectively aggregate energy consumption patterns with appliance specific data to deliver several system designs that meet the client’s end goal, be it carbon emissions reductions, energy resiliency, cost savings etc </p>
        <Button variant="outline" className="uppercase px-8 py-6">See Product Features</Button>
      </div>

      {/* How it works */}
      <div className='w-[80%] mx-auto my-28 flex flex-col justify-center items-center'>
        <h1 className='text-4xl text-heading font-medium'>How it works</h1>
        <p className='text-paraText text-sm font-normal flex leading-7 w-[50%] text-center'>EASI provides a framework for streamlining the engineering, permitting and installation of renewable assets.</p>
        <div className='flex mt-10 gap-8'>
          <div className='flex flex-col items-center justify-center'>
            <Image className='w-20 h-auto mb-10' src={step1} />
            <h1 className='text-2xl text-heading font-medium'>Aggregate</h1>
            <p className='text-center text-paraText text-sm font-normal flex mt-2'>EASI Transforms complex energy data into simple, usable and meaningful insights</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Image className='w-20 h-auto mb-10' src={step2} />
            <h1 className='text-2xl text-heading font-medium'>Analyze</h1>
            <p className='text-center text-paraText text-sm font-normal flex mt-2'>EASI Transforms complex energy data into simple, usable and meaningful insights</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <Image className='w-20 h-auto mb-10' src={step3} />
            <h1 className='text-2xl text-heading font-medium'>Automate</h1>
            <p className='text-center text-paraText text-sm font-normal flex mt-2'>EASI provides the framework by which engineering, permitting and system installation all become a breeze.</p>
          </div>
        </div>
      </div>

      {/* Features of EASI */}
      <div className='w-[80%] mx-auto my-28 flex flex-col justify-center items-center'>
        <h1 className='text-4xl text-heading font-medium'>Features of EASI</h1>
        <p className='text-paraText text-sm font-normal flex leading-7 w-[50%] text-center'>Depending on where you are in the process, EASI has three key features to enable you achieve your microgrid system design goals.</p>
        <div className='flex gap-3 mt-16'>
          <div className='flex flex-col gap-7 rounded-lg py-16 px-4 justify-center items-center  border shadow-shadow border-0.8'>
            <Image src={tile1} />
            <h1 className='text-2xl text-heading font-medium'>Load Profile <br/> Generator</h1>
            <p className='text-center text-paraText text-sm font-normal flex'>EASI enables you to create a custom load usage profile for your project even if you don't have access to any data from your utility.
            </p>
          </div>
          <div className='flex flex-col gap-7 rounded-lg py-16 px-4 justify-center items-center  border shadow-shadow border-0.8'>
            <Image src={tile1} />
            <h1 className='text-2xl text-heading font-medium'>Load Profile <br/> Generator</h1>
            <p className='text-center text-paraText text-sm font-normal flex'>EASI enables you to create a custom load usage profile for your project even if you don't have access to any data from your utility.
            </p>
          </div>
          <div className='flex flex-col gap-7 rounded-lg py-16 px-4 justify-center items-center  border shadow-shadow border-0.8'>
            <Image src={tile1} />
            <h1 className='text-2xl text-heading font-medium'>Load Profile <br/> Generator</h1>
            <p className='text-center text-paraText text-sm font-normal flex'>EASI enables you to create a custom load usage profile for your project even if you don't have access to any data from your utility.
            </p>
          </div>
        </div>
        <Button className="mt-10" variant="outline">Check Out User Manual</Button>
      </div>
    </>
  )
}

export default page
