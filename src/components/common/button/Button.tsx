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

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label = '',
  isDisable = true,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
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