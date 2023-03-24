import React from 'react';

export interface ICheckboxProps {
  name?: string | undefined;
  children?: string | React.ReactNode;
  label?: string;
  forwardedRef?: React.LegacyRef<HTMLInputElement>;
}
