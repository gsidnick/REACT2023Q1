import './Form.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { IRequest } from '../../interfaces/IRequest';
import { IFormProps } from '../../interfaces/IFormProps';
import Notice from '../Notice/Notice';
import Select from '../UI/Select/Select';
import InputText from '../UI/InputText/InputText';
import InputDate from '../UI/InputDate/InputDate';
import InputFile from '../UI/InputFile/InputFile';
import Radio from '../UI/Radio/Radio';
import Checkbox from '../UI/Checkbox/Checkbox';
import Button from '../UI/Button/Button';
import { isValidBirthday, isValidEmail, isValidName } from '../../utils/validators';

interface IFormData {
  City: string;
  Name: string;
  Birthday: string;
  Email: string;
  Photo: FileList;
  Gender: string;
  Check: string[];
  Agree: boolean;
}

function Form({ ...props }: IFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    shouldUseNativeValidation: false,
  });
  const [notice, setNotice] = useState<boolean>(false);

  function showNotice() {
    setNotice(true);
    setTimeout(() => {
      setNotice(false);
    }, 3000);
  }

  const onSubmit = (data: IFormData) => {
    const file = data.Photo[0];
    const photo = URL.createObjectURL(file as Blob | MediaSource);
    const formData: IRequest = {
      city: data.City,
      name: data.Name,
      birthday: data.Birthday,
      photo,
      email: data.Email,
      gender: data.Gender,
      check: data.Check.join(', '),
    };
    props.setRequests(formData);
    showNotice();
    reset();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Select
          register={{
            ...register('City', { required: { value: true, message: 'City is required' } }),
          }}
        />
        {errors.City && <ErrorMessage errorMessage={errors.City.message} />}
        <InputText
          placeholder="Name"
          register={{
            ...register('Name', {
              required: { value: true, message: 'Name is required' },
              validate: isValidName,
            }),
          }}
        />
        {errors.Name && <ErrorMessage errorMessage={errors.Name.message} />}
        <InputDate
          register={{
            ...register('Birthday', {
              required: { value: true, message: 'Birthday is required' },
              validate: isValidBirthday,
            }),
          }}
        />
        {errors.Birthday && <ErrorMessage errorMessage={errors.Birthday.message} />}
        <InputText
          placeholder="E-mail"
          register={{
            ...register('Email', {
              required: { value: true, message: 'Email is required' },
              validate: isValidEmail,
            }),
          }}
        />
        {errors.Email && <ErrorMessage errorMessage={errors.Email.message} />}
        <InputFile
          label="Upload your photo:"
          register={{
            ...register('Photo', {
              required: { value: true, message: 'Photo is required' },
            }),
          }}
        />
        {errors.Photo && <ErrorMessage errorMessage={errors.Photo.message} />}
        <div className="form__question">
          <span className="form__question-label">What gender are you?</span>
          <Radio
            value="Male"
            register={{
              ...register('Gender', { required: { value: true, message: 'Gender is required' } }),
            }}
          >
            Male
          </Radio>
          <Radio
            value="Female"
            register={{
              ...register('Gender', { required: { value: true, message: 'Gender is required' } }),
            }}
          >
            Female
          </Radio>
          {errors.Gender && <ErrorMessage errorMessage={errors.Gender.message} />}
        </div>
        <div className="form__question">
          <span className="form__question-label">What are you ready to check?</span>
          <Checkbox
            value="Restaurant"
            register={{
              ...register('Check', { required: { value: true, message: 'Check is required' } }),
            }}
          >
            Restaurant
          </Checkbox>
          <Checkbox value="Delivery" register={{ ...register('Check', {}) }}>
            Delivery
          </Checkbox>
          <Checkbox value="Cuisine" register={{ ...register('Check', {}) }}>
            Cuisine
          </Checkbox>
          {errors.Check && <ErrorMessage errorMessage={errors.Check.message} />}
        </div>
        <div className="form__submit">
          <Checkbox
            value="I agree"
            register={{
              ...register('Agree', {
                required: {
                  value: true,
                  message: 'Agree to the processing of personal data is required',
                },
              }),
            }}
          >
            I agree to the processing of personal data
          </Checkbox>
          {errors.Agree && <ErrorMessage errorMessage={errors.Agree.message} />}
          <Button type="submit">Send information</Button>
        </div>
      </form>
      {notice && (
        <Notice className="notice notice_success">Form data has been sent successfully</Notice>
      )}
    </>
  );
}

export default Form;
