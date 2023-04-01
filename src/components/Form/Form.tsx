import './Form.css';
import React, { useRef, useState } from 'react';
import InputText from '../UI/InputText/InputText';
import Checkbox from '../UI/Checkbox/Checkbox';
import Radio from '../UI/Radio/Radio';
import Button from '../UI/Button/Button';
import InputDate from '../UI/InputDate/InputDate';
import { IFormProps } from '../../interfaces/IFormProps';
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
import { IRequest } from '../../interfaces/IRequest';
import InputFile from '../UI/InputFile/InputFile';

let formData = {} as IRequest;
let isValidForm = false;

function Form({ ...props }: IFormProps) {
  const [notice, setNotice] = useState<boolean>(false);

  const [cityError, setCityError] = useState<IError>({} as IError);
  const [nameError, setNameError] = useState<IError>({} as IError);
  const [birthdayError, setBirthdayError] = useState<IError>({} as IError);
  const [emailError, setEmailError] = useState<IError>({} as IError);
  const [photoError, setPhotoError] = useState<IError>({} as IError);
  const [genderError, setGenderError] = useState<IError>({} as IError);
  const [checkError, setCheckError] = useState<IError>({} as IError);
  const [agreeError, setAgreeError] = useState<IError>({} as IError);

  const formRef = useRef<HTMLFormElement>(null);
  const cityRef = useRef<HTMLSelectElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const birthdayRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const photoRef = useRef<HTMLInputElement>(null);
  const maleRef = useRef<HTMLInputElement>(null);
  const femaleRef = useRef<HTMLInputElement>(null);
  const restaurantRef = useRef<HTMLInputElement>(null);
  const deliveryRef = useRef<HTMLInputElement>(null);
  const cuisineRef = useRef<HTMLInputElement>(null);
  const agreeRef = useRef<HTMLInputElement>(null);

  function setCity(): void {
    const city = cityRef.current ? cityRef.current.value : '';
    formData = { ...formData, city };
  }

  function setName() {
    const name = nameRef.current ? nameRef.current.value : '';
    formData = { ...formData, name };
  }

  function setBirthday() {
    const birthday = birthdayRef.current ? birthdayRef.current.value : '';
    formData = { ...formData, birthday };
  }

  function setEmail() {
    const email = emailRef.current ? emailRef.current.value : '';
    formData = { ...formData, email };
  }

  function setPhoto() {
    const file = photoRef.current?.files![0];
    const photo = URL.createObjectURL(file as Blob | MediaSource);
    formData = { ...formData, photo };
  }

  function setGender() {
    let gender = '';
    if (maleRef.current?.checked) gender = maleRef.current?.value;
    if (femaleRef.current?.checked) gender = femaleRef.current?.value;
    formData = { ...formData, gender };
  }

  function setCheck() {
    const check = [] as string[];
    if (restaurantRef.current?.checked) check.push(restaurantRef.current?.value);
    if (deliveryRef.current?.checked) check.push(deliveryRef.current?.value);
    if (cuisineRef.current?.checked) check.push(cuisineRef.current?.value);
    formData = { ...formData, check: check.join(', ') };
  }

  function validateForm(): void {
    isValidForm = false;
    const formErrors = [];
    const cityError = validateCity(cityRef.current?.value);
    formErrors.push(cityError.error);
    setCityError(cityError);
    const nameError = validateName(nameRef.current?.value);
    formErrors.push(nameError.error);
    setNameError(nameError);
    const birthdayError = validateBirthday(birthdayRef.current?.value);
    formErrors.push(birthdayError.error);
    setBirthdayError(birthdayError);
    const emailError = validateEmail(emailRef.current?.value);
    formErrors.push(emailError.error);
    setEmailError(emailError);
    const photoError = validatePhoto(photoRef.current?.value);
    formErrors.push(photoError.error);
    setPhotoError(photoError);
    const genderOptions = [maleRef.current?.checked, femaleRef.current?.checked];
    const genderError = validateGender(genderOptions);
    formErrors.push(genderError.error);
    setGenderError(genderError);
    const checkOptions = [
      restaurantRef.current?.checked,
      deliveryRef.current?.checked,
      cuisineRef.current?.checked,
    ];
    const checkError = validateCheck(checkOptions);
    formErrors.push(checkError.error);
    setCheckError(checkError);
    const agreeError = validateAgree(agreeRef.current?.checked);
    formErrors.push(agreeError.error);
    setAgreeError(agreeError);

    if (!formErrors.includes(true)) isValidForm = true;
  }

  function sendForm() {
    setCity();
    setName();
    setBirthday();
    setEmail();
    setPhoto();
    setGender();
    setCheck();
    props.setRequests(formData);
    formRef.current?.reset();
  }

  function onSubmitHandler() {
    validateForm();
    if (isValidForm) sendForm();
    showNotice();
  }

  function showNotice() {
    setNotice(true);
    setTimeout(() => {
      setNotice(false);
    }, 3000);
  }

  return (
    <>
      <form className="form" ref={formRef}>
        <Select ref={cityRef} name="city" />
        {cityError.error && <ErrorMessage errorMessages={cityError.errorMessages} />}
        <InputText ref={nameRef} name="name" placeholder="Name" />
        {nameError.error && <ErrorMessage errorMessages={nameError.errorMessages} />}
        <InputDate ref={birthdayRef} name="birthday" />
        {birthdayError.error && <ErrorMessage errorMessages={birthdayError.errorMessages} />}
        <InputText ref={emailRef} name="email" placeholder="E-mail" />
        {emailError.error && <ErrorMessage errorMessages={emailError.errorMessages} />}
        <InputFile ref={photoRef} label="Upload your photo:" />
        {photoError.error && <ErrorMessage errorMessages={photoError.errorMessages} />}
        <div className="form__question">
          <span className="form__question-label">What gender are you?</span>
          <Radio ref={maleRef} name="gender" value="Male">
            Male
          </Radio>
          <Radio ref={femaleRef} name="gender" value="Female">
            Female
          </Radio>
          {genderError.error && <ErrorMessage errorMessages={genderError.errorMessages} />}
        </div>
        <div className="form__question">
          <span className="form__question-label">What are you ready to check?</span>
          <Checkbox ref={restaurantRef} name="restaurant" value="Restaurant">
            Restaurant
          </Checkbox>
          <Checkbox ref={deliveryRef} name="delivery" value="Delivery">
            Delivery
          </Checkbox>
          <Checkbox ref={cuisineRef} name="cuisine" value="Cuisine">
            Cuisine
          </Checkbox>
          {checkError.error && <ErrorMessage errorMessages={checkError.errorMessages} />}
        </div>
        <div className="form__submit">
          <Checkbox ref={agreeRef} name="agree" value="I agree">
            I agree to the processing of personal data
          </Checkbox>
          {agreeError.error && <ErrorMessage errorMessages={agreeError.errorMessages} />}
          <Button onClick={onSubmitHandler}>Send information</Button>
        </div>
      </form>
      {isValidForm && notice && (
        <Notice className="notice notice_success">Form data has been sent successfully</Notice>
      )}
      {!isValidForm && notice && (
        <Notice className="notice notice_error">Form data contain errors</Notice>
      )}
    </>
  );
}

export default Form;
