import React from 'react'
import Flowers from './Flowers'



const FlowersBouquet = () => {
  return (
    <div>
      Your Flowers Bouquet has the following flowers:
      <Flowers flowers={ ['Orchids', 'African Daisies', 'Liliums'] } />
    </div>
  )
}

export default FlowersBouquet