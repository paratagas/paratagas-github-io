export function cutNameBrackets(countryName) {
  // 200 characters - max expected country name size
  const end = countryName.indexOf('(') > -1 ? countryName.indexOf('(') : 200;
  return countryName.substring(0, end);
}
