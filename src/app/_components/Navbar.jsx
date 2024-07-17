'use client'

import Image from "next/image"
import logo from '../../../public/logo.png'
import { Button } from "@/components/ui/button"

const Navbar = () => {
    return (
        <div className="flex justify-around items-center py-3">
            <div>
                <Image src={logo} className="h-20 w-auto" />
            </div>
            <div className="flex items-center gap-7">
                <div>
                    <ul className="flex gap-4 text-sm text-[#747474] font-medium tracking-wider border-r border-[#747474] pr-10 py-2">
                        <li>ABOUT</li>
                        <li>FEATURES</li>
                        <li>HOW IT WORKS</li>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <Button className='px-7 py-2' variant="outline">LOG IN</Button>
                    <Button className='px-7 py-2'>SIGN UP</Button>

                </div>
            </div>
        </div>
    )
}

export default Navbar
