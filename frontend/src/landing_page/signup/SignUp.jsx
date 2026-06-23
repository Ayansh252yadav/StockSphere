import React from 'react'
import HeroSighup from './HeroSighup'
import InvestMentOption from './InvestMentOption'
import Steps from './Steps'
import Bebefits from './Bebefits'
import FAQs from './faqs'
import OpenAccount from '../OpenAccount'

const signup = () => {
  return (
    <div>
      <HeroSighup/>
       <InvestMentOption/>
       <Steps/>
       <Bebefits/>
       <FAQs/>
       <OpenAccount/>
    </div>
  )
}

export default signup
