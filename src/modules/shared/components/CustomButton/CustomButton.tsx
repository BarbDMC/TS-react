import React from "react";
import {ContainedButton, OutlinedButton, TextOnlyButton} from './ButtonTypes';
import { ButonProps } from "../interfaces";

const CustomButton: React.FC<ButonProps> = ({ title = '', color = 'primary', background='secondary', border='', buttonClass = 'contained', handleClick = () => { } }) => {

  const buttonStyle = {
    contained: <ContainedButton className={buttonClass} background={ background } border={border} color={ color } handleClick={ handleClick }>{ title }</ContainedButton>,
    outlined: <OutlinedButton className={buttonClass} border={border} color={ color } handleClick={ handleClick }>{ title }</OutlinedButton>,
    "text-only": <TextOnlyButton className={buttonClass} color={ color } handleClick={ handleClick }>{ title }</TextOnlyButton>
  }

  return buttonStyle[buttonClass];

}

export default CustomButton;
