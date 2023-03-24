import { IInputProps } from './IInputProps';

export interface IInputFileProps
  extends Omit<IInputProps, 'type' | 'value' | 'placeholder' | 'ref'> {
  label: string;
  accept?: string;
  files?: string[];
}
