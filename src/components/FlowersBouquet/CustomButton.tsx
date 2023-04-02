import React from "react";

interface ButonProps {
  color: 'primary' | 'secondary' | 'warning';
  buttonClass: 'outlined' | 'text-only' | 'container';
  onClick: () => void;
}

const CustomButton: React.FC<ButonProps> = ({color, buttonClass, onClick}) =>{
  return (
    <button onClick={onClick}
        style={{color: color}} 
        className={buttonClass}>
    </button>
  )
}

export default CustomButton;