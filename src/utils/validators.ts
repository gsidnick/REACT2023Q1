export function isValidName(value: string) {
  if (!value.match(/^[A-Za-z]*$/)) return 'Name should contain only latin letter';
  if (!value.match(/^[A-Z]/)) return 'Name should contain the uppercase first letter';
  if (value.length < 3) return 'Name should be at least 3 characters long';
  return true;
}

export function isValidBirthday(value: string) {
  const birthday = new Date(value);
  const now = new Date();
  const age = now.getTime() - birthday.getTime();
  const adultAge = 18 * 365 * 24 * 60 * 60 * 1000;
  const hundredAge = 100 * 365 * 24 * 60 * 60 * 1000;
  if (age < adultAge && age > 0) return 'Age should be over 18 years old';
  if (age > hundredAge) return 'Age should be less 100 years old';
  if (age <= 0) return 'Date should not be in the future';
  return true;
}

export function isValidEmail(value: string) {
  return value.match(/^[A-Z\d._%+-]+@[A-Z\d-]+.[A-Z]{2,4}$/i) ? true : 'Email is not valid';
}
