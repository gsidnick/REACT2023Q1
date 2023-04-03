import './InputFile.css';
import React from 'react';
import { IInputFileProps } from '../../../interfaces/IInputFileProps';

function InputFile({ ...props }: IInputFileProps) {
  return (
    <>
      <label className="input-file">
        <span className="form__question-label">{props.label}</span>
      </label>
      <input
        className="input-file__field"
        type="file"
        accept="image/png, image/jpeg"
        {...props.register}
      />
    </>
  );
}

export default InputFile;
