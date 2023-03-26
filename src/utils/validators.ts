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
  if (value === undefined || value === '') errorMessages.push('Name is required');
  if (value !== undefined && value !== '') {
    if (!value.match(/^[A-Za-z]*$/)) errorMessages.push('Name should contain only latin letter');
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
  if (value === undefined || value === '') {
    errorMessages.push('Birthday is required');
  } else {
    const birthday = new Date(value);
    const now = new Date();
    const age = now.getTime() - birthday.getTime();
    const adultAge = 18 * 365 * 24 * 60 * 60 * 1000;
    const hundredAge = 100 * 365 * 24 * 60 * 60 * 1000;
    if (age < adultAge && age > 0) errorMessages.push('Age should be over 18 years old');
    if (age > hundredAge) errorMessages.push('Age should be less 100 years old');
    if (age <= 0) errorMessages.push('Date should not be in the future');
  }
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
  if (value !== undefined && value !== '') {
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
