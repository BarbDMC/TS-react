type Colors = 'primary' | 'secondary' | 'warning';

export interface ButonProps {
  title?: string
  color?: Colors;
  background?: Colors;
  border?: string;
  buttonClass?: 'outlined' | 'text-only' | 'contained';
  handleClick?: () => void;
}
