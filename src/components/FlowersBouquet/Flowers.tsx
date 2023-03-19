import React from 'react'

type AppProps = { flowers: string [] };

const Flowers = ({ flowers }: AppProps) => {
  return (
    <>
    <ul>
      {
        flowers.map((flower) => (
          <li key={flower}>{flower}</li>
        ))
      }
    </ul>
    </>
  )
}

export default Flowers;