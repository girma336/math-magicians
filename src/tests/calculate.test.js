import calculate from '../logic/calculate';

describe('Test calulate logic', () => {
  const object = {
    total: 8,
    next: 4,
    operation: '+',
  };
  it('calculate to check the AC', () => {
    const temp = calculate(object, 'AC');
    expect(temp.total).toBe(null);
    expect(temp.next).toBe(null);
    expect(temp.operation).toBe(null);
  });

  it('calculate to check the =', () => {
    const temp = calculate(object, '=');

    expect(temp.total).toBe('12');
    expect(temp.next).toBe(null);
    expect(temp.operation).toBe(null);
  });

  it('calculate to check the +/-', () => {
    const temp = calculate(object, '+/-');
    expect(temp.total).toBe(8);
    expect(temp.next).toBe('-4');
    expect(temp.operation).toBe('+');
  });
});
