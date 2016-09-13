/// <reference path="../../../typings/index.d.ts" />
import { ICalculator, Operation } from './calculator.model';
export class Calculator implements ICalculator {
  private _result: number;
  private _currNum: number;
  private _currOpe: Operation;
  private _isEq: boolean;
  
  constructor() {
      this.reset();
  }

  //getters / setters
  get currNum():number {
    return this._currNum;
  }

  private operation(ope?: Operation){
    switch(this._currOpe){
      case Operation.add:
        this._result = this._result + this._currNum;
        break;
      case Operation.remove:
        this._result = this._result - this._currNum;
        break;
      case Operation.divide:
        this._result = this._result / this._currNum;
        break;
      case Operation.multiply:
        this._result = this._result * this._currNum;
        break;
      default:
        this._result = this._currNum;
    }
    this._currOpe = ope;
    this._currNum = this._result;
    this._isEq = true;
  }

  stack(num: number): void {
    if(!this._currNum || this._isEq) {
      this._currNum = 0;
      this._isEq = false;
    }

    this._currNum = +(String(this._currNum) + String(num));
  }

  add(): void {
    this.operation(Operation.add);
  }

  remove(): void {
    this.operation(Operation.remove);
  }

  multiply(): void {
    this.operation(Operation.multiply);
  }

  divide(): void {
    this.operation(Operation.divide);
  }

  total(): void {
    this.operation();
  }

  reset(): void {
      this._result = null;
      this._currNum = null;
      this._currOpe = null;
      this._isEq = false;
  }
}
