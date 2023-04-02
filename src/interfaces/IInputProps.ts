import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface IInputProps {
  type: 'text' | 'email' | 'checkbox' | 'radio' | 'date' | 'file' | 'search';
  value?: string;
  placeholder?: string | '';
  register: UseFormRegisterReturn<string>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
