import './Form.css';
import React from 'react';
import InputFile from '../UI/InputFile/InputFile';
import InputText from '../UI/InputText/InputText';
import Dropdown from '../UI/Dropdown/Dropdown';
import Checkbox from '../UI/Checkbox/Checkbox';
import Radio from '../UI/Radio/Radio';
import Button from '../UI/Button/Button';
import InputDate from '../UI/InputDate/InputDate';
import { IFormProps } from '../../interfaces/IFormProps';
import { IRequest } from '../../interfaces/IRequest';

class Form extends React.Component<IFormProps> {
  private readonly formRef: React.RefObject<HTMLFormElement>;
  private readonly cityRef: React.RefObject<HTMLInputElement>;
  private readonly nameRef: React.RefObject<HTMLInputElement>;
  private readonly birthdayRef: React.RefObject<HTMLInputElement>;
  private readonly emailRef: React.RefObject<HTMLInputElement>;
  private readonly photoRef: React.RefObject<HTMLInputElement>;
  private readonly maleRef: React.RefObject<HTMLInputElement>;
  private readonly femaleRef: React.RefObject<HTMLInputElement>;
  private readonly agreeRef: React.RefObject<HTMLInputElement>;
  private readonly restaurantRef: React.RefObject<HTMLInputElement>;
  private readonly deliveryRef: React.RefObject<HTMLInputElement>;
  private readonly cuisineRef: React.RefObject<HTMLInputElement>;
  private formData: IRequest;

  constructor(props: IFormProps) {
    super(props);
    this.formData = {} as IRequest;
    this.formRef = React.createRef();
    this.cityRef = React.createRef();
    this.nameRef = React.createRef();
    this.birthdayRef = React.createRef();
    this.emailRef = React.createRef();
    this.photoRef = React.createRef();
    this.maleRef = React.createRef();
    this.femaleRef = React.createRef();
    this.restaurantRef = React.createRef();
    this.deliveryRef = React.createRef();
    this.cuisineRef = React.createRef();
    this.agreeRef = React.createRef();
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  setCity(): void {
    const city = this.cityRef.current ? this.cityRef.current.value : '';
    this.formData = { ...this.formData, city };
  }

  setName() {
    const name = this.nameRef.current ? this.nameRef.current.value : '';
    this.formData = { ...this.formData, name };
  }

  setBirthday() {
    const birthday = this.birthdayRef.current ? this.birthdayRef.current.value : '';
    this.formData = { ...this.formData, birthday };
  }

  setEmail() {
    const email = this.emailRef.current ? this.emailRef.current.value : '';
    this.formData = { ...this.formData, email };
  }

  setPhoto() {
    const file = this.photoRef.current?.files![0];
    const photo = URL.createObjectURL(file as Blob | MediaSource);
    this.formData = { ...this.formData, photo };
  }

  setGender() {
    let gender = '';
    if (this.maleRef.current?.checked) gender = this.maleRef.current?.value;
    if (this.femaleRef.current?.checked) gender = this.femaleRef.current?.value;
    this.formData = { ...this.formData, gender };
  }

  setCheck() {
    const check = [] as string[];
    if (this.restaurantRef.current?.checked) check.push(this.restaurantRef.current?.value);
    if (this.deliveryRef.current?.checked) check.push(this.deliveryRef.current?.value);
    if (this.cuisineRef.current?.checked) check.push(this.cuisineRef.current?.value);
    this.formData = { ...this.formData, check: check.join(', ') };
  }

  onSubmitHandler() {
    this.setCity();
    this.setName();
    this.setBirthday();
    this.setEmail();
    this.setPhoto();
    this.setGender();
    this.setCheck();
    this.props.setRequests(this.formData);
  }

  render() {
    return (
      <form className="form" ref={this.formRef}>
        <Dropdown ref={this.cityRef} name="city" />
        <InputText ref={this.nameRef} name="name" placeholder="Name" />
        <InputDate ref={this.birthdayRef} name="birthday" />
        <InputText ref={this.emailRef} name="email" placeholder="E-mail" />
        <InputFile ref={this.photoRef} name="image" label="Choose photo" />
        <div className="form__question">
          <span className="form__question-label">What gender are you?</span>
          <Radio ref={this.maleRef} name="gender" value="Male">
            Male
          </Radio>
          <Radio ref={this.femaleRef} name="gender" value="Female">
            Female
          </Radio>
        </div>
        <div className="form__question">
          <span className="form__question-label">What are you ready to check?</span>
          <Checkbox ref={this.restaurantRef} name="restaurant" value="Restaurant">
            Restaurant
          </Checkbox>
          <Checkbox ref={this.deliveryRef} name="delivery" value="Delivery">
            Delivery
          </Checkbox>
          <Checkbox ref={this.cuisineRef} name="cuisine" value="Cuisine">
            Cuisine
          </Checkbox>
        </div>
        <div className="form__submit">
          <Checkbox ref={this.agreeRef} name="agree" value="I agree">
            I agree to the processing of personal data
          </Checkbox>
          <Button onClick={this.onSubmitHandler}>Send information</Button>
        </div>
      </form>
    );
  }
}

export default Form;
