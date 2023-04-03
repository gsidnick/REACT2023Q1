import { IInputProps } from './IInputProps';

export interface IInputFileProps extends Omit<IInputProps, 'type' | 'value' | 'placeholder'> {
  label: string;
  accept?: string;
  files?: string[];
}
