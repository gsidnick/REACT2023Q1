import './InputFile.css';
import React from 'react';
import { IInputFileProps } from '../../../interfaces/IInputFileProps';

function InputFile({ ...props }: IInputFileProps, ref: React.ForwardedRef<HTMLInputElement>) {
  return (
    <>
      <label className="input-file">
        <span className="form__question-label">{props.label}</span>
      </label>
      <input
        className="input-file__field"
        type="file"
        accept="image/png, image/jpeg"
        name="photo"
        ref={ref}
      />
    </>
  );
}

export default React.forwardRef(InputFile);
