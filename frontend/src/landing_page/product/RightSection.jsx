import React from 'react'
import { MoveRight } from 'lucide-react'
const RightSection = ({productName, 
  productDescription, 
  learnMore,
  imageUrl}) => {
  return (
    <div className='flex felx-col-2  items-center justify-center px-30  ml-10'>
      <div className='w-1/2 ml-30'>
        <h1 className='text-[30px] font-lightbold text-gray-700'>{productName}</h1>
        <p className='max-w-96 leading-7 text-gray-600'>{productDescription}</p>
        <a className=" inline-flex items-center gap-2  text-blue-500 hover:text-blue-700 mt-5"href={learnMore}>
Learn more<MoveRight/></a>
      </div>
      <div className='w-1/2'>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  )
}

export default RightSection
