import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {CalculatorService} from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit, OnDestroy {
  expression: string;
  result: string;
  resultheading: any;

  constructor(
    private calculatorService: CalculatorService
  ) {
    this.calculatorService = calculatorService;
    this.result = 'No result';
  }

  compute() {

    this.calculatorService
      .compute(this.expression)
      .subscribe(
        (res: HttpResponse<string>) => this.onSuccess(res.body),
        (res: HttpErrorResponse) => this.onError(res.message)
      );
  }

  private onSuccess(data: string) {
    this.result = data;
  }

  private onError(errorMessage: string) {
    alert(errorMessage);
  }

  ngOnDestroy()
    :
    void {
  }

  ngOnInit()
    :
    void {
  }

}
