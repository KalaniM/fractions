export class Fraction {
    constructor(private numerator: number, private denominator: number) {
    }
    static add(fractionA: Fraction, fractionB: Fraction) {
        return new Fraction(fractionA.numerator + fractionB.numerator, 1)
    }
}