import React from 'react'
import { MoveRight } from 'lucide-react'
import googlePlayBadge from "../../assets/googlePlayBadge.svg"
import appstoreBadge from "../../assets/appstoreBadge.svg"
const LeftSection = ({imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore}) => {
  return (
    <div className='flex flex-col-2 items-center justify-center px-30 ml-20 mt-10 py-10'>
      <div className='w-1/2 '>
        <img src={imageUrl} alt="" />
      </div>
      <div className='w-1/2 ml-35'>
        <h1 className='text-[30px] font-lightbold text-gray-700'>{productName}</h1>
        <p className='max-w-96 leading-7 text-gray-600'>{productDescription}</p>
      <div className='mt-5 flex gap-16'>
          <a className=" inline-flex items-center gap-2  text-blue-500 hover:text-blue-700" href={tryDemo}>Try demo<MoveRight/></a>
        <a className=" inline-flex items-center gap-2  text-blue-500 hover:text-blue-700 "href={learnMore}>
Learn more<MoveRight/></a>
      </div>
       <div className='mt-5'>
         <a className=" inline-flex items-center gap-2  text-blue-500 hover:text-blue-700" href={googlePlay}><img src={googlePlayBadge} alt="" /></a>
        <a className=" inline-flex items-center gap-2  text-blue-500 hover:text-blue-700 ml-5" href={appStore}><img src={appstoreBadge} alt="" /></a>
       </div>
      </div>
    </div>
  )
}

export default LeftSection
