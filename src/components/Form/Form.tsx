import './Form.css';
import React from 'react';
import InputFile from '../UI/InputFile/InputFile';
import InputText from '../UI/InputText/InputText';
import Dropdown from '../UI/Dropdown/Dropdown';

class Form extends React.Component {
  private readonly formRef: React.RefObject<HTMLFormElement>;
  private readonly cityRef: React.RefObject<HTMLInputElement>;
  private readonly nameRef: React.RefObject<HTMLInputElement>;
  private readonly emailRef: React.RefObject<HTMLInputElement>;
  private readonly imageRef: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);
    this.formRef = React.createRef();
    this.cityRef = React.createRef();
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.imageRef = React.createRef();
  }

  render() {
    return (
      <form className="form" ref={this.formRef}>
        <Dropdown ref={this.cityRef} name="city" />
        <InputText ref={this.nameRef} name="name" placeholder="Name" />
        <InputText ref={this.emailRef} name="email" placeholder="E-mail" />
        <InputFile ref={this.imageRef} name="image" label="Choose photo" />
      </form>
    );
  }
}

export default Form;
