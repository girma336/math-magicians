import operate from '../logic/operate';

describe('Test Opration test case', () => {
  const numberOne = 8;
  const numberTwo = 8;
  it('Test addition 8 + 8 shoulbe 16', () => {
    const sum = Number(operate(numberOne, numberTwo, '+'));
    expect(sum).toBe(16);
  });

  it('Test substraction of 8 - 8 should be 0 ', () => {
    const sub = Number(operate(numberOne, numberTwo, '-'));
    expect(sub).toBe(0);
  });

  it('Test division of 8 / 8 should be 1', () => {
    const sum = Number(operate(numberOne, numberTwo, '÷'));
    expect(sum).toBe(1);
  });

  it('Test multiplication of 8 * 8 should be 64', () => {
    const sum = Number(operate(numberOne, numberTwo, 'x'));
    expect(sum).toBe(64);
  });

  it('Test module of 8 % 8 should be 0', () => {
    const sum = Number(operate(numberOne, numberTwo, '%'));
    expect(sum).toBe(0);
  });

  it("Test divid by zero of 14 ÷ 0 should be Can't divide by 0.", () => {
    const sum = operate(14, 0, '÷');
    expect(sum).toBe("Can't divide by 0.");
  });

  it("Test module of 8 % 8 should be Can't find modulo as can't divide by 0.", () => {
    const sum = operate(numberOne, 0, '%');
    expect(sum).toBe("Can't find modulo as can't divide by 0.");
  });
});
