import './Form.css';
import React from 'react';
import InputFile from '../UI/InputFile/InputFile';
import InputText from '../UI/InputText/InputText';
import Dropdown from '../UI/Dropdown/Dropdown';
import Checkbox from '../UI/Checkbox/Checkbox';
import Radio from '../UI/Radio/Radio';

class Form extends React.Component {
  private readonly formRef: React.RefObject<HTMLFormElement>;
  private readonly cityRef: React.RefObject<HTMLInputElement>;
  private readonly nameRef: React.RefObject<HTMLInputElement>;
  private readonly emailRef: React.RefObject<HTMLInputElement>;
  private readonly imageRef: React.RefObject<HTMLInputElement>;
  private readonly agreeRef: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);
    this.formRef = React.createRef();
    this.cityRef = React.createRef();
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.imageRef = React.createRef();
    this.agreeRef = React.createRef();
  }

  render() {
    return (
      <form className="form" ref={this.formRef}>
        <Dropdown ref={this.cityRef} name="city" />
        <InputText ref={this.nameRef} name="name" placeholder="Name" />
        <InputText ref={this.emailRef} name="email" placeholder="E-mail" />
        <InputFile ref={this.imageRef} name="image" label="Choose photo" />
        <div className="form__question">
          <span className="form__question-label">What are you ready to check?</span>
          <Radio name="radio">Restaurant and Delivery</Radio>
          <Radio name="radio">Cuisine</Radio>
          <Radio name="radio">All together</Radio>
        </div>
        <Checkbox name="check1">I agree to the processing of personal data</Checkbox>
      </form>
    );
  }
}

export default Form;
