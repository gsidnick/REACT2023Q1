import './InputFile.css';
import React, { useState } from 'react';
import { IInputFileProps } from '../../../interfaces/IInputFileProps';

function InputFile({ ...props }: IInputFileProps, ref: React.ForwardedRef<HTMLInputElement>) {
  const [filename, setFilename] = useState('');

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files !== null) {
      setFilename(event.target.files[0].name);
    }
    if (props.onChange != undefined) props.onChange(event);
  }

  return (
    <label className="input-file">
      <input
        className="input-file__field"
        type="file"
        accept="image/png, image/jpeg"
        name={props.name}
        ref={ref}
        onChange={onChangeHandler}
      />
      <span className="input-file__name">{filename}</span>
      <span className="input-file__button button">{props.label}</span>
    </label>
  );
}

export default React.forwardRef(InputFile);
