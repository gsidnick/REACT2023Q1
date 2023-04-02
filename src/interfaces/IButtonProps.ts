import React from 'react';

export interface IButtonProps {
  type: 'button' | 'submit';
  children?: string;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}
