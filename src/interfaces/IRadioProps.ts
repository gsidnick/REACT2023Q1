import React from 'react';

export interface IRadioProps {
  name?: string | undefined;
  children?: string | React.ReactNode;
  label?: string;
  forwardedRef?: React.LegacyRef<HTMLInputElement>;
}
