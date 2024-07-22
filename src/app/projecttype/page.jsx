'use client'
import React from 'react'
import HeaderHome from '../_components/HeaderHome'
import UtilityImg from '../../../public/svg-icons/utility.svg'
import ResidentialImg from '../../../public/svg-icons/residential.svg'
import TelecomImg from '../../../public/svg-icons/telecom.svg'
import OtherImg from '../../../public/svg-icons/other.svg'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
    const handleUtility = () => {
        router.push('/utility')
    } 
  return (
    <div>
      <HeaderHome/>
      <div className='flex flex-col items-center justify-center mt-10'>
        <h1 className='text-2xl mb-4 text-heading font-medium'>Please select your project type below</h1>
        <div className='flex gap-24 mt-10'>
            <div onClick={handleUtility} className='flex flex-col items-center gap-6'>
            <UtilityImg className='w-[150px] h-[150px]'/>
            <h3>Utility</h3>
            </div>
            <div className='flex flex-col items-center gap-6'>
            <ResidentialImg className='w-[150px] h-[150px]'/>
            <h3>Residential</h3>
            </div>
            <div className='flex flex-col items-center gap-6'>
            <TelecomImg className='w-[150px] h-[150px]'/>
            <h3>Telecom</h3>
            </div>
            <div className='flex flex-col items-center gap-6'>
            <OtherImg className='w-[150px] h-[150px]'/>
            <h3>Other</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
