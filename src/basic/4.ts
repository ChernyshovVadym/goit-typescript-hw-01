const showMessage = (message: string): void => console.log(message);

const calc = (num1: number, num2: number): number => {
  return num1 + num2;
};

const customError = (): never => {
  throw new Error('Error');
};
