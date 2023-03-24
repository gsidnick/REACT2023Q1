import React from 'react';

export interface IRadioProps {
  name: string | undefined;
  value: string;
  children?: string | React.ReactNode;
  label?: string;
  forwardedRef?: React.LegacyRef<HTMLInputElement>;
}
