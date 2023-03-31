import React from 'react';

export interface ICheckboxProps {
  name: string | undefined;
  value: string;
  children?: string | React.ReactNode;
  label?: string;
}
