import React from 'react';

export interface IInputProps {
  type: 'text' | 'email' | 'checkbox' | 'radio' | 'date' | 'file' | 'search';
  name?: string | undefined;
  value?: string;
  forwardedRef?: React.LegacyRef<HTMLInputElement>;
  placeholder?: string | '';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
