import React from 'react';
import './button.css'

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large' | 'bottom' | 'backBtn';
  label?: string;
  isDisable?: boolean;
  onClick?: () => void;
}

const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label = '',
  isDisable = false,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  
  // TODO disabled 로직, css 추가하기
  return (
    <button
      type="button"
      className={['button', `button--${size}`, mode, (isDisable)? 'btn-disabled': ''].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {size === 'backBtn'? '<' : label}
    </button>
  );
};

export default Button;
