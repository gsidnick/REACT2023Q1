import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface IRadioProps {
  value: string;
  children?: string | React.ReactNode;
  label?: string;
  register: UseFormRegisterReturn<string>;
}
