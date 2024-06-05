import { MainButton, MainHeading, MainTitle } from '@/components/molecules'
import React from 'react'
import CarouselCategory from './CarouselCategory'

export default function Categories() {
  return (
    <div className='pt-[120px] container mx-auto bg-slate-400'>
      <div className='flex flex-col items-center  mb-[15px]'>
        <MainTitle title=' COURSES CATEGORIES' />
        <MainHeading >
          Explore Top Category
        </MainHeading>
        <MainButton href='' text='View All Category' className='text-white ' />
      </div>
      <div className="carousel-category mt-[20px]">
        <CarouselCategory />
        Carousel Category 
      </div>
    </div>
  )
}
