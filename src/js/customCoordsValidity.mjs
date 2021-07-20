export default function customCoordsValidity(value) {
    const result = value.match(/^\[?\d+\.\d+,\s?\d+\.\d+\]?$/);
    if (result === null) {
        return false;
    } 
        return true;
}