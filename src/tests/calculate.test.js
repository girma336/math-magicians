import calculate from '../logic/calculate';

describe("Test calulate logic", () => {
    const object = {
        total: 8,
        next: 4,
        operation: "+"
    }
    it("calculate to check the AC", () => {
        const temp = calculate(object, 'AC')
        expect(temp.total).toBe(null)
        expect(temp.next).toBe(null)
        expect(temp.operation).toBe(null)
    })
});