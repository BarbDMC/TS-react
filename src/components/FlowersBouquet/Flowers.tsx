import React from 'react'
import CustomButton from '../CustomButton/CustomButton';

type AppProps = { flowers: string[] };

const Flowers = ({ flowers }: AppProps) => {

  const handleClick = () => {

    console.log('Handle click');


  }

  return (
    <>
      <ul>
        {
          flowers.map((flower) => (
            <li key={ flower }>{ flower }</li>
          ))
        }
      </ul>

      <CustomButton
        title='Soy un Boton'
        handleClick={ handleClick }
        buttonClass='outlined'
      />
    </>
  )
}

export default Flowers;