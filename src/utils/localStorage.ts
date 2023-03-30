export function setLocalQuery(value: string) {
  if (value !== '') {
    window.localStorage.setItem('query', value);
  } else {
    window.localStorage.removeItem('query');
  }
}
export function getLocalQuery(): string {
  const query = window.localStorage.getItem('query');
  return query !== null ? query : '';
}
