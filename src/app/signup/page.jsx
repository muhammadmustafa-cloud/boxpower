'use client'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import microsoft from '../../../public/microsoft.png';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push('/home')
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-md">
        <div className="flex justify-center mb-6">
          <Image src={logo} alt="BoxPower Logo" className="w-28 h-auto" />
        </div>
        <h2 className="text-xl font-semibold text-center">Welcome</h2>
        <p className="text-center">Login with your Boxpower details</p>
        <Button className="w-full mt-4 rounded-full py-7" variant="outline">
          <Image src={microsoft} alt="Microsoft Logo" className="mr-2 h-4 w-4" /> 
          Login with a boxpower.io account
        </Button>
        <div className="flex items-center justify-center mt-6">
          <span className="border-b w-1/4"></span>
          <span className="px-2 text-gray-500">OR</span>
          <span className="border-b w-1/4"></span>
        </div>
        <form className="mt-4 space-y-4">
          <div className="relative">
          <Input type="email" placeholder="Email" />
          </div>
          <div className="relative">
          <Input type="password" placeholder="Password" />
          </div>
          <a href="#" className="text-sm text-[#ed683c] hover:underline">
            Forgot password?
          </a>
          <Button onClick={handleLogin} className="w-full">
            Continue
          </Button>
        </form>
        <p className="mt-6 text-center">
          Don't have an account?{' '}
          <a href="#" className="text-[#ed683c] hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;
