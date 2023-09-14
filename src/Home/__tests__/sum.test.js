import { sum } from "../Sum";


test("Sum Funaction should caculate the sum of two numbers", () => {

    const result = sum(3, 4);

    expect(result).toBe(7);
});