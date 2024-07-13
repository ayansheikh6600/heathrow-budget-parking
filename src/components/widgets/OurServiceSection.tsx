import React from 'react'
import OurServiceCard from '../shared/OurServiceCard'

const OurServiceSection = () => {
  return (
    <div className='sm:container w-full p-2 flex flex-col gap-4'>
        
        <div>
            <h2 className='text-3xl text-center font-semibold sm:text-5xl md:text-6xl'>
                Our Service
            </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <OurServiceCard/>
            <OurServiceCard/>
            <OurServiceCard/>
            <OurServiceCard/>
            <OurServiceCard/>
            <OurServiceCard/>
        </div>
    </div>
  )
}

export default OurServiceSection