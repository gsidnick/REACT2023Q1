import './Form.css';
import React from 'react';
import InputText from '../UI/InputText/InputText';
import Checkbox from '../UI/Checkbox/Checkbox';
import Radio from '../UI/Radio/Radio';
import Button from '../UI/Button/Button';
import InputDate from '../UI/InputDate/InputDate';
import { IFormProps } from '../../interfaces/IFormProps';
import { IRequest } from '../../interfaces/IRequest';
import IFormState from '../../interfaces/IFormState';
import {
  validateAgree,
  validateBirthday,
  validateCheck,
  validateCity,
  validateEmail,
  validateGender,
  validateName,
  validatePhoto,
} from '../../utils/validators';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Notice from '../Notice/Notice';
import IError from '../../interfaces/IError';
import Select from '../UI/Select/Select';

class Form extends React.Component<IFormProps, IFormState> {
  private readonly formRef: React.RefObject<HTMLFormElement>;
  private readonly cityRef: React.RefObject<HTMLSelectElement>;
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

  private isValidForm: boolean;
  constructor(props: IFormProps) {
    super(props);
    this.formData = {} as IRequest;
    this.isValidForm = false;
    this.state = {} as IFormState;
    this.state = {
      cityError: {} as IError,
      nameError: {} as IError,
      birthdayError: {} as IError,
      emailError: {} as IError,
      photoError: {} as IError,
      genderError: {} as IError,
      checkError: {} as IError,
      agreeError: {} as IError,
      showNotice: false,
    };
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

  validateForm(): void {
    this.isValidForm = false;
    const formErrors = [];
    const cityError = validateCity(this.cityRef.current?.value);
    formErrors.push(cityError.error);
    this.setState({ cityError });
    const nameError = validateName(this.nameRef.current?.value);
    formErrors.push(nameError.error);
    this.setState({ nameError });
    const birthdayError = validateBirthday(this.birthdayRef.current?.value);
    formErrors.push(birthdayError.error);
    this.setState({ birthdayError });
    const emailError = validateEmail(this.emailRef.current?.value);
    formErrors.push(emailError.error);
    this.setState({ emailError });
    const photoError = validatePhoto(this.photoRef.current?.value);
    formErrors.push(photoError.error);
    this.setState({ photoError });
    const genderOptions = [this.maleRef.current?.checked, this.femaleRef.current?.checked];
    const genderError = validateGender(genderOptions);
    formErrors.push(genderError.error);
    this.setState({ genderError });
    const checkOptions = [
      this.restaurantRef.current?.checked,
      this.deliveryRef.current?.checked,
      this.cuisineRef.current?.checked,
    ];
    const checkError = validateCheck(checkOptions);
    formErrors.push(checkError.error);
    this.setState({ checkError });
    const agreeError = validateAgree(this.agreeRef.current?.checked);
    formErrors.push(agreeError.error);
    this.setState({ agreeError });

    if (!formErrors.includes(true)) this.isValidForm = true;
  }

  sendForm() {
    this.setCity();
    this.setName();
    this.setBirthday();
    this.setEmail();
    this.setPhoto();
    this.setGender();
    this.setCheck();
    this.props.setRequests(this.formData);
    this.formRef.current?.reset();
  }

  onSubmitHandler() {
    this.validateForm();
    if (this.isValidForm) this.sendForm();
    this.showNotice();
  }

  showNotice() {
    this.setState({ showNotice: true });
    setTimeout(() => {
      this.setState({ showNotice: false });
    }, 3000);
  }

  render() {
    return (
      <>
        <form className="form" ref={this.formRef}>
          <Select ref={this.cityRef} name="city" />
          {this.state?.cityError.error && (
            <ErrorMessage errorMessages={this.state.cityError.errorMessages} />
          )}
          <InputText ref={this.nameRef} name="name" placeholder="Name" />
          {this.state?.nameError.error && (
            <ErrorMessage errorMessages={this.state.nameError.errorMessages} />
          )}
          <InputDate ref={this.birthdayRef} name="birthday" />
          {this.state?.birthdayError.error && (
            <ErrorMessage errorMessages={this.state.birthdayError.errorMessages} />
          )}
          <InputText ref={this.emailRef} name="email" placeholder="E-mail" />
          {this.state?.emailError.error && (
            <ErrorMessage errorMessages={this.state.emailError.errorMessages} />
          )}
          <div className="form__question">
            <span className="form__question-label">Upload your photo:</span>
            <input type="file" accept="image/png, image/jpeg" name="photo" ref={this.photoRef} />
          </div>
          {this.state?.photoError.error && (
            <ErrorMessage errorMessages={this.state.photoError.errorMessages} />
          )}
          <div className="form__question">
            <span className="form__question-label">What gender are you?</span>
            <Radio ref={this.maleRef} name="gender" value="Male">
              Male
            </Radio>
            <Radio ref={this.femaleRef} name="gender" value="Female">
              Female
            </Radio>
            {this.state?.genderError.error && (
              <ErrorMessage errorMessages={this.state.genderError.errorMessages} />
            )}
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
            {this.state?.checkError.error && (
              <ErrorMessage errorMessages={this.state.checkError.errorMessages} />
            )}
          </div>
          <div className="form__submit">
            <Checkbox ref={this.agreeRef} name="agree" value="I agree">
              I agree to the processing of personal data
            </Checkbox>
            {this.state?.agreeError.error && (
              <ErrorMessage errorMessages={this.state.agreeError.errorMessages} />
            )}
            <Button onClick={this.onSubmitHandler}>Send information</Button>
          </div>
        </form>
        {this.isValidForm && this.state.showNotice && (
          <Notice className="notice notice_success">Form data has been sent successfully</Notice>
        )}
        {!this.isValidForm && this.state.showNotice && (
          <Notice className="notice notice_error">Form data contain errors</Notice>
        )}
      </>
    );
  }
}

export default Form;
