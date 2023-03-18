export function getPageName(path: string) {
  switch (path) {
    case '/':
      return 'Pizza';
    case '/about':
      return 'About Us';
    default:
      return '';
  }
}

export default getPageName;
