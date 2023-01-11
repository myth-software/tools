export function flattenFormula(formula: {
  expression?: unknown;
  string?: string;
}) {
  if (formula?.expression) {
    return formula.expression;
  }
  if (formula?.string) {
    return formula.string;
  }
}
