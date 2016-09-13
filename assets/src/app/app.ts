/// <reference path="../../typings/index.d.ts" />
declare var $: any;

import { Calculator } from './calculator/calculator';

class App {
  private _$input: any;
  private _calculator: Calculator;
  private _test: string = 'toto';

  constructor() {
    this._calculator = new Calculator();
    this._$input = $('#res');
    this.addEvent();
  }

  private render(): void {
    this._$input.val(this._calculator.currNum);
  }

  private addEvent(): void {
    let $buttons:any = $(':button');

    $.each($buttons, (i: number, v: any) => {
      let elt: any = $(v);
      let val: string = elt.attr('data-calculator');
      let method: any;
      if(val) {
        switch(val){
          case '0':
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':
            method = () => {this._calculator.stack(+val)};
            break;
          case '+':
            method = () => {this._calculator.add();};
            break;
          case '-':
            method = () => {this._calculator.remove();};
            break;
          case '/':
            method = () => {this._calculator.divide();};
            break;
          case 'x':
            method = () => {this._calculator.multiply();};
            break;
          case 'AC':
            method = () => {this._calculator.reset();};
            break;
          case '=':
            method = () => {this._calculator.total();};
            break;
          default:
              console.log('no actions');
        }

        if(method) {
          elt.click(() => {
            method();
            this.render();
          });
        }
      }
    });
  }
}

let app = new App();
