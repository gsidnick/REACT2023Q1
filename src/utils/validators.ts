import IError from '../interfaces/IError';

export function validateCity(value: string | undefined): IError {
  let error = false;
  const errorMessages = [] as string[];
  if (value === undefined || value === '') errorMessages.push('City is required');
  if (errorMessages.length > 0) error = true;
  return {
    error,
    errorMessages,
  };
}

export function validateName(value: string | undefined): IError {
  let error = false;
  const errorMessages = [] as string[];
  if (value === undefined || value === '') errorMessages.push('Name should not be empty');
  if (value !== undefined) {
    if (!value.match(/[A-Za-z]*/)) errorMessages.push('Name should contain only latin letter');
    if (!value.match(/^[A-Z]/))
      errorMessages.push('Name should contain the uppercase first letter');
  }
  if (errorMessages.length > 0) error = true;
  return {
    error,
    errorMessages,
  };
}

export function validateBirthday(value: string | undefined): IError {
  let error = false;
  const errorMessages = [] as string[];
  if (value === undefined || value === '') errorMessages.push('Birthday is required');
  if (errorMessages.length > 0) error = true;
  return {
    error,
    errorMessages,
  };
}

export function validateEmail(value: string | undefined): IError {
  let error = false;
  const errorMessages = [] as string[];
  if (value === undefined || value === '') errorMessages.push('Email is required');
  if (value !== undefined) {
    if (!value.match(/^[A-Z\d._%+-]+@[A-Z\d-]+.[A-Z]{2,4}$/i)) {
      errorMessages.push('Email is not valid');
    }
  }
  if (errorMessages.length > 0) error = true;
  return {
    error,
    errorMessages,
  };
}

export function validatePhoto(value: string | undefined): IError {
  let error = false;
  const errorMessages = [] as string[];
  if (value === undefined || value === '') errorMessages.push('Photo is required');
  if (errorMessages.length > 0) error = true;
  return {
    error,
    errorMessages,
  };
}

export function validateGender(value: (boolean | undefined)[]): IError {
  let error = false;
  const errorMessages = [] as string[];
  if (!value.includes(true)) errorMessages.push('Gender is required');
  if (errorMessages.length > 0) error = true;
  return {
    error,
    errorMessages,
  };
}

export function validateCheck(value: (boolean | undefined)[]): IError {
  let error = false;
  const errorMessages = [] as string[];
  if (!value.includes(true)) errorMessages.push('Check is required');
  if (errorMessages.length > 0) error = true;
  return {
    error,
    errorMessages,
  };
}
export function validateAgree(value: boolean | undefined): IError {
  let error = false;
  const errorMessages = [] as string[];
  if (!value) errorMessages.push('Agree to the processing of personal data is required');
  if (errorMessages.length > 0) error = true;
  return {
    error,
    errorMessages,
  };
}
