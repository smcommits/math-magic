import calculate from '../../logic/calculate';

let data = {
  total: '24',
  next: '42',
  operation: '+',
};

describe('calculate', () => {
  it('should clear the calculator data if buttonName is "AC"', () => {
    expect(calculate(data, 'AC')).toEqual({ total: '', next: '', operation: '' });
  });

  it('should return nothing only total is present and it has dot when buttonName is "."', () => {
    data = { total: '50.', next: '', operation: '+' };
    expect(calculate(data, '.')).toEqual({});
  });

  it('should return nothing only next is present and it has dot when buttonName is "."', () => {
    data = { total: '50.', next: '40.', operation: '+' };
    expect(calculate(data, '.')).toEqual({});
  });

  it('should return next with dot if next present', () => {
    data = { total: '50.', next: '20', operation: '+' };
    expect(calculate(data, '.')).toEqual({ next: '20.' });
  });

  it('should return total with dot if total present and buttonName is dot', () => {
    data = { total: '20', next: '', operation: '' };
    expect(calculate(data, '.')).toEqual({ next: '.' });
  });

  it('should return absolute value of next if next present and buttonName is "+/-"', () => {
    data = {total: '', next: '20', operation: ''}
    expect(calculate(data, '+/-')).toEqual({next: -20})
  })

  it('should should return nothing if no values present and buttonName is "+/-"', () => {
    data = {total: "", next: "", operation: ""}
    expect(calculate(data, '+/-')).toEqual({})
  })

  it('should return absolute value of total if total present and buttonName is "+/-"', () => {
    data = {total: "4", next: "", operation: ""}
    expect(calculate(data, '+/-')).toEqual({total: -4})
  })

  it('should return the result if all the values present and buttonName is "="', () => {
    data = {total: '5', next: '5', operation: '+'}
    expect(calculate(data, '=')).toEqual({next: "", operation: "", total: "10"})
  })
});

describe('calculate - each with numbers from 1 to 9. It should return next + the number', () => {
  data.next = '4';

  test.each([
    [data, '1', { next: '41' }],
    [data, '2', { next: '42' }],
    [data, '3', { next: '43' }],
    [data, '4', { next: '44' }],
    [data, '5', { next: '45' }],
    [data, '6', { next: '46' }],
    [data, '7', { next: '47' }],
    [data, '8', { next: '48' }],
    [data, '9', { next: '49' }],
  ])('calculate(%o, %s) - %o', (data, input, expected) => {
    const result = calculate(data, input);
    expect(result).toEqual(expected);
  });
});

describe('calculate - each with numbers from 1 to 9. It should return total + the number, if total present but no operation.', () => {
  data = { total: '4', next: '', operation: '' };

  test.each([
    [data, '1', { total: '41' }],
    [data, '2', { total: '42' }],
    [data, '3', { total: '43' }],
    [data, '4', { total: '44' }],
    [data, '5', { total: '45' }],
    [data, '6', { total: '46' }],
    [data, '7', { total: '47' }],
    [data, '8', { total: '48' }],
    [data, '9', { total: '49' }],
  ])('calculate(%o, %s) - %o', (data, input, expected) => {
    const result = calculate(data, input);
    expect(result).toEqual(expected);
  });
});

describe('calculate - each with mathematical operation. It will return result if data, next, and operation present.', () => {
  test.each([
    [{ total: '10', next: '5', operation: '+' }, '+', { total: '15+', next: '', operation: '+' }],
    [{ total: '10', next: '5', operation: '-' }, '-', { total: '5-', next: '', operation: '-' }],
    [{ total: '10', next: '5', operation: 'x' }, 'x', { total: '50x', next: '', operation: 'x' }],
    [{ total: '10', next: '5', operation: '/' }, '/', { total: '2/', next: '', operation: '/' }],
    [{ total: '10', next: '5', operation: '%' }, '%', { total: '0%', next: '', operation: '%' }],
  ])('calculate(%o, %s) - %o', (data, input, expected) => {
    const result = calculate(data, input);
    expect(result).toEqual(expected);
  });
});

describe('calculate - each with mathematical operation. It will return nothing if either of totat and next is missing but operation present', () => {
  test.each([
    [{ total: '10', next: '', operation: '+' }, '+', {}],
    [{ total: '10', next: '', operation: '-' }, '-', {}],
    [{ total: '10', next: '', operation: 'x' }, 'x', {}],
    [{ total: '10', next: '', operation: '/' }, '/', {}],
    [{ total: '10', next: '', operation: '%' }, '%', {}],
  ])('calculate(%o, %s) - %o', (data, input, expected) => {
    const result = calculate(data, input);
    expect(result).toEqual(expected);
  });
});
