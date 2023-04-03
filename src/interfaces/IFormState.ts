import IError from './IError';

export default interface IFormState {
  cityError: IError;
  nameError: IError;
  birthdayError: IError;
  emailError: IError;
  photoError: IError;
  genderError: IError;
  checkError: IError;
  agreeError: IError;
  showNotice: boolean;
}
