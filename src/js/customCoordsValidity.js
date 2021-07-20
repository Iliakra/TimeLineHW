export default function customCoordsValidity(value) {
  const valid = value.match(/^\[?\d+\.\d+,\s?\d+\.\d+\]?$/);
  if (valid === null) {
    return false;
  }
  const result = value.match(/\d+\.\d+,\s?\d+\.\d+/)[0];
  return result;
}
