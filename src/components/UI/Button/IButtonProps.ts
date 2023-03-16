import React from 'react';

export interface IButtonProps {
  children?: string;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}
