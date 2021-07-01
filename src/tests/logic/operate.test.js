import operate from '../../logic/operate';

describe('Operate - each. It will return result of mathematical operation for each operator and two values', () => {
  const one = 10
  const two = 10
  test.each([
    [one, two, "+", "20"],
    [one, two, "-", "0"],
    [one, two, "/", "1"],
    [one, two, "%", "0"],
    [one, two, "*", "100"],
    [one, two, "x", "100"],
  ])('calculate(%s, %s, %s) - %s', (one, two, operator, expected) => {
    const result = operate(one, two, operator);
    expect(result).toEqual(expected);
  });
});

