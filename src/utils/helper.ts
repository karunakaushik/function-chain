export const extractVariable = (equation: string): string => {
  const match = equation.match(/[a-zA-Z]/);
  return match ? match[0] : "x";
};

export const isValidEquation = (equation: string): boolean => {
  const regex = /^[0-9+\-*/^()\s]*$/;
  return regex.test(equation);
};

export const calculateResult = (
  equation: string,
  value: number,
  variable: string
) => {
  try {
    let formula = equation.replace(new RegExp(variable, "g"), `${value}`);
    formula = formula.replace(/\^/g, "**");
    if (!isValidEquation(formula)) {
      throw new Error("Invalid equation structure.");
    }
    const result = new Function("return " + formula)();
    return result;
  } catch (error) {
    return error;
  }
};
