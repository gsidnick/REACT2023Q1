export function setQuery(value: string) {
  if (value !== '') {
    localStorage.setItem('query', value);
  } else {
    localStorage.removeItem('query');
  }
}
export function getQuery(): string | null {
  return localStorage.getItem('query');
}
