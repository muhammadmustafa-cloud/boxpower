import Navbar from '../_components/Navbar';
import { Button } from '@/components/ui/button';
import heroImage from '../../../public/hero-image.png';
import step1 from '../../../public/step-image-1.png';
import step2 from '../../../public/step-image-2.png';
import step3 from '../../../public/step-image-3.png';
import tile1 from '../../../public/tile-image-1.png';
import tile2 from '../../../public/tile-image-2.png';
import tile3 from '../../../public/tile-image-3.png';
import profile6 from '../../../public/profile-image-6.png';
// import CustomerReviewCard from '../components/CustomerReviewCard'; // Adjust the import path
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Footer from '../_components/Footer';


const CustomerReviewCard = ({ name, designation, review, rating }) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg shadow-lg">
      <Image className="rounded-full w-24 h-24 mb-4" src={profile6} alt={`${name}'s profile`} />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{designation}</p>
      <p className="text-center mt-4 text-gray-700">{review}</p>
      <div className="flex mt-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`w-6 h-6 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .288l2.833 8.718H24l-6.917 5.034 2.666 8.718L12 17.733 4.251 22.758 6.917 14.04 0 9.006h9.167L12 .288z" />
          </svg>
        ))}
      </div>
    </div>
  );
};



const page = () => {
  const reviews = [
    {
      name: 'Pierre Cox',
      designation: 'Chief Solutions Designer',
      review: 'EASI helped me understand the energy consumption of my facility much better and now I know the power-hungry appliances.',
      rating: 5,
    },
    {
      name: 'Kamari Rowe',
      designation: 'Telecom Operations Director',
      review: 'Its the only tool in the market that helps in modelling, deisgning and automating the energy audit process at a great price.',
      rating: 5,
    },
    {
      name: 'Averi Wells',
      designation: 'EV Charging Analyst',
      review: 'The simplicity and the visuals of the energy audit report helped me convince my manager to install a BoxPower solar microgrid for our facility.',
      rating: 5,
    },
    {
      name: 'John Doe',
      designation: 'Energy Consultant',
      review: 'The EASI tool has significantly improved our system design process and financial analysis.',
      rating: 5,
    },
    {
      name: 'John Doe',
      designation: 'Energy Consultant',
      review: 'The EASI tool has significantly improved our system design process and financial analysis.',
      rating: 5,
    },
    // Add more reviews as needed
  ];



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
      {/* <CarouselSpacing/> */}
      <div className='w-[80%] mx-auto my-28'>
        <h1 className='text-4xl text-heading font-medium'>Customer Reviews</h1>
        <p className='text-paraText text-sm font-normal flex leading-7 w-[50%] text-center'>See what our customers have to say about their experiences with the EASI tool.</p>
        <Carousel>
          <CarouselContent className="flex justify-around">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="basis-1/3 p-2">
                <CustomerReviewCard {...review} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className='flex flex-col items-center justify-center bg-custom-gradient py-24 my-10 gap-7'>
            <h1 className='text-white font-semibold text-4xl'>Configure a microgrid solution to your exact needs!</h1>
            <Button variant="secondary" className="px-8 py-6 text-base uppercase">Get Started Now</Button>
      </div>

      <Footer/>
    </>
  );
};

export default page;
