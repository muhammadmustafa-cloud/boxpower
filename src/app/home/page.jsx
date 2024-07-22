'use client'
import React from 'react';
import HeaderHome from '../_components/HeaderHome';
import CreateProjectIcon from '../../../public/svg-icons/create-new.svg';
import { FaRegCopy } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import {
  Table as UITable,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    SN: 1,
    projectCode: "WO1720114511",
    projectName: "Gudali",
    projectType: "Residential",
    createdBy: "Charles Babbage",
    customerName: "Sokoto",
    iconCopy: <FaRegCopy />,
    iconDelet: <MdDelete />,
  },
  {
    SN: 2,
    projectCode: "WO1720114511",
    projectName: "Gudali",
    projectType: "Residential",
    createdBy: "Charles Babbage",
    customerName: "Sokoto",
    iconCopy: <FaRegCopy />,
    iconDelet: <MdDelete />,
  },
  {
    SN: 4,
    projectCode: "WO1720114511",
    projectName: "Gudali",
    projectType: "Residential",
    createdBy: "Charles Babbage",
    customerName: "Sokoto",
    iconCopy: <FaRegCopy />,
    iconDelet: <MdDelete />,
  },
];

const InvoiceTable = () => {
  return (
    <UITable className="">
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">S/N</TableHead>
          <TableHead>Project Code</TableHead>
          <TableHead>Project Name</TableHead>
          <TableHead className="text-center">Project Type</TableHead>
          <TableHead className="text-center">Created By</TableHead>
          <TableHead className="text-center">Customer Name</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.SN}>
            <TableCell className='text-center font-medium'>{invoice.SN}</TableCell>
            <TableCell className='text-center'>{invoice.projectCode}</TableCell>
            <TableCell className='text-center'>{invoice.projectName}</TableCell>
            <TableCell className="text-center">{invoice.projectType}</TableCell>
            <TableCell className="text-center">{invoice.createdBy}</TableCell>
            <TableCell className="text-center">{invoice.customerName}</TableCell>
            <TableCell className="text-center">{invoice.iconCopy}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </UITable>
  );
};

const page = () => {
  const handleCreateProject = () => {

  }
  return (
    <div>
      <HeaderHome />
      <div className='flex mt-14 justify-center'>
        <div className='w-[70%] flex flex-col items-center'>
          <h1 className='text-xl mb-4 text-heading font-medium'>Here are your most recent projects, select one to work on</h1>
          <div>
            <InvoiceTable className="w-16 h-16"/>
          </div>
        </div>
        <div className='w-[30%]'>
          <h1 className='text-xl mb-4 text-heading font-medium'>Otherwise:</h1>
          <div onClick={handleCreateProject} className='border border-gray-400 hover:border-[#ed683c] text-gray-500 hover:text-[#ed683c] h-[220px] w-[200px] flex flex-col justify-center items-center rounded-lg'>
            <CreateProjectIcon className='hover:text-[#ed683c]' />
            <h1 className='text-xl text-center mt-4'>Create a New Project</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
