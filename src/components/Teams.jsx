import React from 'react'
import { profiles } from '../constant'
const Teams = () => {
  return (
    <div className='bg-darkBlueMain relative z-[5] flex justify-between  md:px-[5rem] sm:px-[3rem] px-[2rem] items-center'>
      <div className='flex sm:flex-row flex-col'>
      {profiles.map((prof)=> (
        <div key={prof.id} className=" max-w-{100%} card bg-darkBlueIntro mr-[2rem] sm:mb-0 mb-5 justify-between   flex-1">
          <h1 className='p-5 font-Raleway font-[700] text-gray-300'>{prof.content}</h1>
          <div className='flex p-5 gap-2'>
          <img src={prof.photo} alt="" className='rounded-full w-[32px] h-[32px]' />
          <div className='flex flex-col mt-0 '>
            <h2 className='font-Raleway font-[700] text-gray-300 text-[12px]'>{prof.name}</h2>
            <span className='font-Raleway font-[400] text-gray-300 text-[10px]'>{prof.career}</span>
          </div>
          </div>
        </div>
      ))}
      </div>
      
    </div>
  )
}

export default Teams
