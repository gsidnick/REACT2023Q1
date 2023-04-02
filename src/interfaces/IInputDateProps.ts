import { IInputProps } from './IInputProps';

export interface IInputDateProps
  extends Omit<IInputProps, 'type' | 'value' | 'placeholder' | 'ref'> {}
