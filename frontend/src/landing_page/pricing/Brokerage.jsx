import React from 'react'
import AccountOpening from './AccountOpening'
import Demat from './Demat'
import OptionalValue from './OptionalValue'
import ChargesExplained from './ChargesExplained'
import Disclaimer from './Disclaimer'
const Brokerage = () => {
  return (
    <div>
      <AccountOpening/>
      <Demat/>
      <OptionalValue/>
      <ChargesExplained/>
      <Disclaimer/>
    </div>
  )
}

export default Brokerage
