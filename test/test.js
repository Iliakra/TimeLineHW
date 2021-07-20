import customCoordsValidity from '../src/js/customCoordsValidity.js';

test.each([
  ['coords validation with space', '12.567, 56.789', '12.567, 56.789'],
  ['coords validation without space', '12.567,56.789', '12.567,56.789'],
  ['not correct coords with false validation', '12 56.789', false],
])(('expect to be %s'), (_, input, expected) => {
  expect(customCoordsValidity(input)).toBe(expected);
});
