export class CalculatorService {
    add(num1: number, num2?: number) {
        return num1 + num2;
    }

    sub(num1: number, num2: number) {
        return num1 - num2;
    }

    mul(num1: number, num2: number) {
        return num1 * num2;
    }

}