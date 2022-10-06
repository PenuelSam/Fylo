import React from 'react'

const Email = () => {
  return (
    <div className='flex relative z-[5] md:top-[5rem] top-[6rem] justify-center items-center  mt-[10rem]'>
      <div className='bg-darkBlueIntro card2 md:w-[800px] sm:w-[500px] md:h-auto w-[350px] sm:h-[600px] h-[500px] flex flex-col justify-center items-center'>
      <h1 className='mt-[2rem] font-Raleway font-[700] text-White sm:text-[30px] text-[25px]'>Get early access today</h1>
      <p className='sm:px-[5rem] px-[2rem] mt-[1rem] text-center font-Raleway font-[400] text-White text-[14px]'>It only takes a minute to sign up and our free starter tier is extremely generous.
        if you have any questions, our support team would be happy to help you
      </p>
      
      <div className='flex md:flex-row flex-col  gap-5 my-[3rem]'>
      <input type="email" placeholder='johnappleseed#email.com' className='relative md:w-[450px] w-[300px]  p-[1rem] pl-[2rem] rounded-full' />
      <button className="bg-cyan  px-[2rem] text-center rounded-full py-[15px]  text-White">
          Get Started For Free
      </button>
      </div>
      <span className=' md:flex hidden relative bottom-[3rem] text-lightRed left-[-12rem]'>Please enter a valid email address</span>
      </div>
    </div>
  )
}

export default Email
