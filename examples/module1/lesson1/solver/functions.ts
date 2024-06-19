export function add(valueA: number, valueB: number): number  | string {
  return valueA + valueB;
}
export function substract(valueA: number, valueB: number): number | string {
  return valueA - valueB;
}
export function multiply(valueA: number, valueB: number): number | string {
  return valueA * valueB;
}

export function divide(valueA: number, valueB: number): number | string {
  if(valueB == 0)
    return "Cannot divide by 0";
  return valueA / valueB;
}
