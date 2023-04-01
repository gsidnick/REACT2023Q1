import './Form.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { IRequest } from '../../interfaces/IRequest';
import { IFormProps } from '../../interfaces/IFormProps';
import Notice from '../Notice/Notice';

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
    shouldFocusError: false,
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
        <select {...register('City', { required: { value: true, message: 'City is required' } })}>
          <option value="">Choose city</option>
          <option value="Rome">Rome</option>
          <option value="Milan"> Milan</option>
          <option value="Turin">Turin</option>
          <option value="Palermo">Palermo</option>
          <option value="Florence">Florence</option>
        </select>
        {errors.City && <ErrorMessage errorMessage={errors.City.message} />}
        <input
          type="text"
          placeholder="Name"
          {...register('Name', {
            required: { value: true, message: 'Name is required' },
          })}
        />
        {errors.Name && <ErrorMessage errorMessage={errors.Name.message} />}
        <input
          type="date"
          {...register('Birthday', { required: { value: true, message: 'Birthday is required' } })}
        />
        {errors.Birthday && <ErrorMessage errorMessage={errors.Birthday.message} />}
        <input
          type="email"
          {...register('Email', {
            required: { value: true, message: 'Email is required' },
            pattern: { value: /^\S+@\S+$/i, message: 'Email is invalid' },
          })}
        />
        {errors.Email && <ErrorMessage errorMessage={errors.Email.message} />}
        <input
          type="file"
          {...register('Photo', {
            required: { value: true, message: 'Photo is required' },
          })}
        />
        {errors.Photo && <ErrorMessage errorMessage={errors.Photo.message} />}
        <label>
          <input
            {...register('Gender', { required: { value: true, message: 'Gender is required' } })}
            type="radio"
            value="Male"
          />
          <span>Male</span>
        </label>
        <label>
          <input
            {...register('Gender', { required: { value: true, message: 'Gender is required' } })}
            type="radio"
            value="Female"
          />
          <span>Female</span>
        </label>
        {errors.Gender && <ErrorMessage errorMessage={errors.Gender.message} />}
        <label>
          <input
            type="checkbox"
            value="Restaurant"
            {...register('Check', { required: { value: true, message: 'Check is required' } })}
          />
          <span>Restaurant</span>
        </label>
        <label>
          <input type="checkbox" value="Delivery" {...register('Check', {})} />
          <span>Delivery</span>
        </label>
        <label>
          <input type="checkbox" value="Cuisine" {...register('Check', {})} />
          <span>Cuisine</span>
        </label>
        {errors.Check && <ErrorMessage errorMessage={errors.Check.message} />}
        <label>
          <input
            type="checkbox"
            placeholder="Agree"
            {...register('Agree', { required: { value: true, message: 'Agree is required' } })}
          />
          <span>I agree</span>
        </label>
        {errors.Agree && <ErrorMessage errorMessage={errors.Agree.message} />}

        <input type="submit" />
      </form>
      {notice && (
        <Notice className="notice notice_success">Form data has been sent successfully</Notice>
      )}
    </>
  );
}

export default Form;
