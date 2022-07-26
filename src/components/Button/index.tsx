import { ButtonHTMLAttributes } from 'react';
import * as C from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'larger' | 'medium' | 'small';
  colorStyle?: 'plain' | 'golden' | 'tined' | 'filled';
}

function Button({
  children,
  size = 'small',
  colorStyle = 'plain',
  ...rest
}: ButtonProps) {
  return (
    <C.Container type="button" size={size} colorStyle={colorStyle} {...rest}>
      {children}
    </C.Container>
  );
}

export default Button;
