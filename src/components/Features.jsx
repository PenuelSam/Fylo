import React from 'react'
import { features } from '../constant'

const Features = () => {
  return (
    <div className='bg-darkBlueMain flex sm:flex-row flex-col justify-between gap-[3rem] md:px-[15rem]  sm:px-[5rem] py-[5rem] items-center'>
      
    
      {features.map((feat)=> (
        <div key={feat.id} className="flex-1">
          <img src={feat.icon} alt="" className='m-auto' />
          <h1 className='font-Raleway font-[700]  pt-[1rem] text-[20px] text-center text-White'>{feat.title}</h1>
          <p className='font-Raleway text-White font-[400] text-center text-[16px]'>{feat.content}</p>
        </div>
        
      ))}
  

    </div>
  )
}

export default Features
