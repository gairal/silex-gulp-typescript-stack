export interface ICalculator {
  stack(num: number):void;
  add(num: number):void;
  remove(num: number):void;
  multiply(num: number):void;
  divide(num: number):void;
  total(num: number):void;
  reset():void;
}

export const enum Operation {
  add,
  remove,
  multiply,
  divide,
  total
}
