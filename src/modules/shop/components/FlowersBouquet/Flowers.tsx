import React from 'react'
import CustomButton from '../../../shared/components/CustomButton/CustomButton';

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
        color='primary'
        border='1px solid'
      />
    </>
  )
}

export default Flowers;