import { isFormulaGuard } from '../../guards';

export function assertsIsFormula(value: unknown): asserts value is {
  formula: {
    expression: unknown;
  };
} {
  if (!isFormulaGuard(value)) {
    console.error(value);
    throw new TypeError('not a formula');
  }
}
