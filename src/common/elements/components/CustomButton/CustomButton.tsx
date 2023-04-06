import React from "react";
import { containedButtonStyle, outlinedButtonStyle, textOnlyButtonStyle } from "./styles";

import { colors as CssColors } from '../../../../theme/colors/colors'

type Colors = 'primary' | 'secondary' | 'warning';

interface ButonProps {
  title: string
  color?: Colors;
  buttonClass?: 'outlined' | 'text-only' | 'contained';
  handleClick?: () => void;
}


const ContainedButton: React.FC<Partial<ButonProps>> = ({ title = '', color = 'primary', handleClick = () => { } }) => (
  <button onClick={ handleClick }
    style={ { ...containedButtonStyle, backgroundColor: CssColors[color] } }
  >
    { title }
  </button>
)

const OutlinedButton: React.FC<Partial<ButonProps>> = ({ title = '', color = 'primary', handleClick = () => { } }) => (
  <button onClick={ handleClick }
    style={ { ...outlinedButtonStyle, color: CssColors[color], borderColor: CssColors[color] } }
  >
    { title }
  </button>
)

const TextOnlyButton: React.FC<Partial<ButonProps>> = ({ title = '', color = 'primary', handleClick = () => { } }) => (
  <button onClick={ handleClick }
    style={ { ...textOnlyButtonStyle, backgroundColor: CssColors[color] } }
  >
    { title }
  </button>
)

const CustomButton: React.FC<ButonProps> = ({ title = '', color = 'primary', buttonClass = 'contained', handleClick = () => { } }) => {

  const buttonStyle = {
    contained: <ContainedButton title={ title } color={ color } handleClick={ handleClick } />,
    outlined: <OutlinedButton title={ title } color={ color } handleClick={ handleClick } />,
    "text-only": <TextOnlyButton title={ title } color={ color } handleClick={ handleClick } />
  }

  return buttonStyle[buttonClass];

}

export default CustomButton;