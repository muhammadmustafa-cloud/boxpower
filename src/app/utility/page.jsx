import React from 'react'
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import HeaderHome from '../_components/HeaderHome';
import { Button } from '@/components/ui/button';

const ConstructionType = () => {
  return (
    <Select>
      <label htmlFor="target-renewable" className="block text-sm font-medium text-gray-700 mb-1">Construction Type</label>
      <SelectTrigger className="w-[380px] focus:border-none focus:ring-0 focus:outline-none">
        <SelectValue placeholder="Select construction type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Construction Types</SelectLabel>
          <SelectItem value="new-construction">New construction</SelectItem>
          <SelectItem value="retrofit">Retrofit</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};


// export default ConstructionType;


const Page = () => {
  return (
    <div>
      <HeaderHome />
      <div className='flex flex-col items-center mt-10'>
        <h1 className='text-xl mb-4 text-heading font-medium'>General Project Information</h1>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-3">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="border border-gray-300 focus:border-gray-300 focus:ring-transparent focus:outline-none"
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
          <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">Project Name</label>
          <Input
            type="text"
            id="project-name"
            placeholder="Project Name"
            className="border border-gray-300 focus:border-gray-300 focus:ring-transparent focus:outline-none"
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
          <label htmlFor="project-type" className="block text-sm font-medium text-gray-700">Project Type</label>
          <Input
            type="text"
            id="project-type"
            placeholder="Project Type"
            className="border border-gray-300 focus:border-gray-300 focus:ring-transparent focus:outline-none"
            required
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
          <label htmlFor="target-renewable" className="block text-sm font-medium text-gray-700">Target Renewable (%)</label>
          <Input
            type="text"
            id="target-renewable"
            placeholder="Target Renewable (%)"
            className="border border-gray-300 focus:border-gray-300 focus:ring-transparent focus:outline-none"
            required
          />
        </div>
        <div className='mt-4 '>
          <ConstructionType />
        </div>
        <div>
          <Button variant="outline" className="rounded-lg" >Next</Button>
        </div>
      </div>
    </div>
  )
}

export default Page
