import Image from "next/image";
import React from "react";
import { Timeline, } from "@/components/ui/timeline";
import StudentProfileCard from "./StudentProfileCard";
import { Data2014,Data2015,Data2016,Data2017,Data2018,Data2020,Data2021,Data2022,Data2023 } from './data';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Inter,Poppins } from 'next/font/google'
const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
})
export function JazbaaTimeLine() {
  const data = [
    {
      title: "2014",
      content: (
        <div>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 sm:mb-6 md:mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">

            {Data2014.map((student) => (
              <StudentProfileCard
                key={student.id} 
                linkedinUrl={student.linkedinUrl}
                studentName={student.studentName}
                role={student.role}
                companyLogoUrl={student.companyLogoUrl}
                profileImage={student.profileImage}
              />
            ))}





          </div>
          <Card className="bg-black border-[0px] p-2 sm:p-3 md:p-4 flex gap-2 sm:gap-3 md:gap-4 w-full h-4 sm:h-8 p-2 relative">
  {/* Left side - Student Image */}
  <div className="flex-shrink-0">
  </div>

  {/* Right side content */}
  <div className="flex-grow flex items-center flex-col justify-center">
    {/* Centered Text */}
    <p className="text-[#ff0000] text-center">And many more...</p>

    {/* Company section */}
    {/* <div className="flex flex-col items-center justify-center">
      <p className="text-[8px] sm:text-[9px] p-[2px] text-black font-semibold line-clamp-2">
      </p>
      <div className="h-4 sm:h-5 w-12 sm:w-16 mb-1">
      </div>
    </div> */}
  </div>
</Card>
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div>
          <p className={`text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 sm:mb-6 md:mb-8 ${poppins.className}`}>
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">

          {Data2015.map((student) => (
              <StudentProfileCard
                key={student.id} 
                linkedinUrl={student.linkedinUrl}
                studentName={student.studentName}
                role={student.role}
                companyLogoUrl={student.companyLogoUrl}
                profileImage={student.profileImage}
              />
            ))}



          </div>
          <Card className="bg-black border-[0px] p-2 sm:p-3 md:p-4 flex gap-2 sm:gap-3 md:gap-4 w-full h-4 sm:h-8 p-2 relative">
  {/* Left side - Student Image */}
  <div className="flex-shrink-0">
  </div>

  {/* Right side content */}
  <div className="flex-grow flex items-center flex-col justify-center">
    {/* Centered Text */}
    <p className="text-[#ff0000] text-center">And many more...</p>

    {/* Company section */}
    {/* <div className="flex flex-col items-center justify-center">
      <p className="text-[8px] sm:text-[9px] p-[2px] text-black font-semibold line-clamp-2">
      </p>
      <div className="h-4 sm:h-5 w-12 sm:w-16 mb-1">
      </div>
    </div> */}
  </div>
</Card>
        </div>
      ),
    },
    {
      title: "2016",
      content: (
        <div>
                   <p className={`text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 sm:mb-6 md:mb-8 ${poppins.className}`}>
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">

          {Data2016.map((student) => (
              <StudentProfileCard
                key={student.id} 
                linkedinUrl={student.linkedinUrl}
                studentName={student.studentName}
                role={student.role}
                companyLogoUrl={student.companyLogoUrl}
                profileImage={student.profileImage}
              />
            ))}



          </div>

          <Card className="bg-black border-[0px] p-2 sm:p-3 md:p-4 flex gap-2 sm:gap-3 md:gap-4 w-full h-4 sm:h-8 p-2 relative">
  {/* Left side - Student Image */}
  <div className="flex-shrink-0">
  </div>

  {/* Right side content */}
  <div className="flex-grow flex items-center flex-col justify-center">
    {/* Centered Text */}
    <p className="text-[#ff0000] text-center">And many more...</p>

    {/* Company section */}
    {/* <div className="flex flex-col items-center justify-center">
      <p className="text-[8px] sm:text-[9px] p-[2px] text-black font-semibold line-clamp-2">
      </p>
      <div className="h-4 sm:h-5 w-12 sm:w-16 mb-1">
      </div>
    </div> */}
  </div>
</Card>
        </div>
      ),
    },

    {
      title: "2017",
      content: (
        <div>
                   <p className={`text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 sm:mb-6 md:mb-8 ${poppins.className}`}>
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">

          {Data2017.map((student) => (
              <StudentProfileCard
                key={student.id} 
                linkedinUrl={student.linkedinUrl}
                studentName={student.studentName}
                role={student.role}
                companyLogoUrl={student.companyLogoUrl}
                profileImage={student.profileImage}
              />
            ))}



          </div>

          <Card className="bg-black border-[0px] p-2 sm:p-3 md:p-4 flex gap-2 sm:gap-3 md:gap-4 w-full h-4 sm:h-8 p-2 relative">
  {/* Left side - Student Image */}
  <div className="flex-shrink-0">
  </div>

  {/* Right side content */}
  <div className="flex-grow flex items-center flex-col justify-center">
    {/* Centered Text */}
    <p className="text-[#ff0000] text-center">And many more...</p>

    {/* Company section */}
    {/* <div className="flex flex-col items-center justify-center">
      <p className="text-[8px] sm:text-[9px] p-[2px] text-black font-semibold line-clamp-2">
      </p>
      <div className="h-4 sm:h-5 w-12 sm:w-16 mb-1">
      </div>
    </div> */}
  </div>
</Card>
        </div>
      ),
    },


    {
      title: "2018",
      content: (
        <div>
          <p className={`text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 sm:mb-6 md:mb-8 ${poppins.className}`}>
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">

          {Data2018.map((student) => (
              <StudentProfileCard
                key={student.id} 
                linkedinUrl={student.linkedinUrl}
                studentName={student.studentName}
                role={student.role}
                companyLogoUrl={student.companyLogoUrl}
                profileImage={student.profileImage}
              />
            ))}



          </div>

          <Card className="bg-black border-[0px] p-2 sm:p-3 md:p-4 flex gap-2 sm:gap-3 md:gap-4 w-full h-4 sm:h-8 p-2 relative">
  {/* Left side - Student Image */}
  <div className="flex-shrink-0">
  </div>

  {/* Right side content */}
  <div className="flex-grow flex items-center flex-col justify-center">
    {/* Centered Text */}
    <p className="text-[#ff0000] text-center">And many more...</p>

    {/* Company section */}
    {/* <div className="flex flex-col items-center justify-center">
      <p className="text-[8px] sm:text-[9px] p-[2px] text-black font-semibold line-clamp-2">
      </p>
      <div className="h-4 sm:h-5 w-12 sm:w-16 mb-1">
      </div>
    </div> */}
  </div>
</Card>
        </div>
      ),
    },


    {
      title: "2020",
      content: (
        <div>
          <p className={`text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 sm:mb-6 md:mb-8 ${poppins.className}`}>
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">

          {Data2020.map((student) => (
              <StudentProfileCard
                key={student.id} 
                linkedinUrl={student.linkedinUrl}
                studentName={student.studentName}
                role={student.role}
                companyLogoUrl={student.companyLogoUrl}
                profileImage={student.profileImage}
              />
            ))}



          </div>

          <Card className="bg-black border-[0px] p-2 sm:p-3 md:p-4 flex gap-2 sm:gap-3 md:gap-4 w-full h-4 sm:h-8 p-2 relative">
  {/* Left side - Student Image */}
  <div className="flex-shrink-0">
  </div>

  {/* Right side content */}
  <div className="flex-grow flex items-center flex-col justify-center">
    {/* Centered Text */}
    <p className="text-[#ff0000] text-center">And many more...</p>

    {/* Company section */}
    {/* <div className="flex flex-col items-center justify-center">
      <p className="text-[8px] sm:text-[9px] p-[2px] text-black font-semibold line-clamp-2">
      </p>
      <div className="h-4 sm:h-5 w-12 sm:w-16 mb-1">
      </div>
    </div> */}
  </div>
</Card>
        </div>
      ),
    },

    {
      title: "2021",
      content: (
        <div>
          <p className={`text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 sm:mb-6 md:mb-8 ${poppins.className}`}>
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">

          {Data2021.map((student) => (
              <StudentProfileCard
                key={student.id} 
                linkedinUrl={student.linkedinUrl}
                studentName={student.studentName}
                role={student.role}
                companyLogoUrl={student.companyLogoUrl}
                profileImage={student.profileImage}
              />
            ))}



          </div>

          <Card className="bg-black border-[0px] p-2 sm:p-3 md:p-4 flex gap-2 sm:gap-3 md:gap-4 w-full h-4 sm:h-8 p-2 relative">
  {/* Left side - Student Image */}
  <div className="flex-shrink-0">
  </div>

  {/* Right side content */}
  <div className="flex-grow flex items-center flex-col justify-center">
    {/* Centered Text */}
    <p className="text-[#ff0000] text-center">And many more...</p>

    {/* Company section */}
    {/* <div className="flex flex-col items-center justify-center">
      <p className="text-[8px] sm:text-[9px] p-[2px] text-black font-semibold line-clamp-2">
      </p>
      <div className="h-4 sm:h-5 w-12 sm:w-16 mb-1">
      </div>
    </div> */}
  </div>
</Card>
        </div>
      ),
    },

    {
      title: "2022",
      content: (
        <div>
          <p className={`text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 sm:mb-6 md:mb-8 ${poppins.className}`}>
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">

          {Data2022.map((student) => (
              <StudentProfileCard
                key={student.id} 
                linkedinUrl={student.linkedinUrl}
                studentName={student.studentName}
                role={student.role}
                companyLogoUrl={student.companyLogoUrl}
                profileImage={student.profileImage}
              />
            ))}



          </div>

          <Card className="bg-black border-[0px] p-2 sm:p-3 md:p-4 flex gap-2 sm:gap-3 md:gap-4 w-full h-4 sm:h-8 p-2 relative">
  {/* Left side - Student Image */}
  <div className="flex-shrink-0">
  </div>

  {/* Right side content */}
  <div className="flex-grow flex items-center flex-col justify-center">
    {/* Centered Text */}
    <p className="text-[#ff0000] text-center">And many more...</p>

    {/* Company section */}
    {/* <div className="flex flex-col items-center justify-center">
      <p className="text-[8px] sm:text-[9px] p-[2px] text-black font-semibold line-clamp-2">
      </p>
      <div className="h-4 sm:h-5 w-12 sm:w-16 mb-1">
      </div>
    </div> */}
  </div>
</Card>
        </div>
      ),
    },

    {
      title: "2023",
      content: (
        <div>
          <p className={`text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 sm:mb-6 md:mb-8 ${poppins.className}`}>
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">

          {Data2023.map((student) => (
              <StudentProfileCard
                key={student.id} 
                linkedinUrl={student.linkedinUrl}
                studentName={student.studentName}
                role={student.role}
                companyLogoUrl={student.companyLogoUrl}
                profileImage={student.profileImage}
              />
            ))}



          </div>

          <Card className="bg-black border-[0px] p-2 sm:p-3 md:p-4 flex gap-2 sm:gap-3 md:gap-4 w-full h-4 sm:h-8 p-2 relative">
  {/* Left side - Student Image */}
  <div className="flex-shrink-0">
  </div>

  {/* Right side content */}
  <div className="flex-grow flex items-center flex-col justify-center">
    {/* Centered Text */}
    <p className="text-[#ff0000] text-center">And many more...</p>

    {/* Company section */}
    {/* <div className="flex flex-col items-center justify-center">
      <p className="text-[8px] sm:text-[9px] p-[2px] text-black font-semibold line-clamp-2">
      </p>
      <div className="h-4 sm:h-5 w-12 sm:w-16 mb-1">
      </div>
    </div> */}
  </div>
</Card>
        </div>
      ),
    },

  ];

  return (
    <div className="w-full">
         <div className="w-full text-center pt-16 pb-4 ">
        <h1 className="text-4xl font-bold  text-[#ff0000] ">INIT RECRUITMENT PLATFORM</h1>
        <p className="text-white text-lg">A UNIQUE PLACEMENT PLATFORM FOR CORE TECHNICAL JOB ROLES IN DREAM COMPANIES</p>
      </div>
      <Timeline data={data} />
    </div>
  );
}