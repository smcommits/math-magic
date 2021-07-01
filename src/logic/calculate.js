import operate from './operate';

export default function calculate(data, buttonName) {
  const isNumber = (buttonName) => buttonName.match(/[0-9]+/);

  const isOperator = (buttonName) => ['+', '-', '*', '/', '%', 'x', '*'].includes(buttonName);

  const cleardata = () => ({
    total: '',
    next: '',
    operation: '',
  });

  const extractNumber = (str) => str.match(/^-?[0-9]+\.?[0-9]?/g)[0];

  const hasDot = (str) => str.includes('.');

  const performOperation = () => {
    const first = Number(extractNumber(data.total));
    const second = Number(data.next);
    const result = operate(first, second, data.operation);
    return result;
  };

  if (buttonName === 'AC') {
    return cleardata();
  }

  if (isNumber(buttonName)) {
    if (data.next) {
      return { next: data.next + buttonName };
    }
    if (data.total && !data.operation) {
      return { total: data.total + buttonName };
    }
    return { next: buttonName };
  }

  if (isOperator(buttonName)) {
    if (data.next && data.total && data.operation) {
      const result = performOperation();
      return { total: result + buttonName, next: '', operation: buttonName };
    }

    if (data.operation) {
      return {};
    }

    if (data.next) {
      return { total: data.next + buttonName, next: '', operation: buttonName };
    }

    if (data.total) {
      return { total: data.total + buttonName, operation: buttonName };
    }
  }

  if (buttonName === '.') {
    if (!data.next && hasDot(data.total)) {
      return {};
    }

    if (!data.total && hasDot(data.next)) {
      return {};
    }

    if (hasDot(data.next)) {
      return {};
    }

    if (hasDot(data.total) && hasDot(data.next)) {
      return {};
    }

    if (data.next) {
      return { next: data.next + buttonName };
    }

    if (data.total) {
      return { next: data.next + buttonName };
    }
  }

  if (buttonName === '+/-') {
    if (data.next) {
      return { next: data.next * -1 };
    }

    if (data.operation && !data.next) {
      return {};
    }

    if (data.total && !data.next) {
      return { total: data.total * -1 };
    }

    return {};
  }

  if (buttonName === '=' || buttonName === 'Enter') {
    if (data.next && data.total && data.operation) {
      const result = performOperation();
      return { total: result, next: '', operation: '' };
    }
  }

  return {};
}
