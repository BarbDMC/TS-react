import styled from "styled-components";
import { ButonProps } from "../interfaces";
import { colors as CssColors } from '@colors/colors'


const Custom = styled.button<ButonProps>`
  color: ${(props: ButonProps) => props.color && CssColors[props.color]};
  border: ${(props: ButonProps) => props.border || 'none'};
  border-radius: 10px;
  padding: 14px;
`;

export const ContainedButton = styled(Custom)`
  background-color: ${(props: ButonProps) => props.background && CssColors[props.background]};
`;

export const OutlinedButton = styled(Custom)`
  font-weight: bold;
`;

export const TextOnlyButton = styled(Custom)`
  
`; 