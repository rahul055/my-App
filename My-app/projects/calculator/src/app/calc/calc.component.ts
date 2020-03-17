import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  @ViewChild("myinp", { static: false })
  myinput: ElementRef


  @ViewChild("answer", { static: false })
  answer: ElementRef


  cls() {
    this.answer.nativeElement.value = ""
  }
  bksp() {
    this.answer.nativeElement.value = ''
  }
  equation() {
    // ans = this.answer.nativeElement.value;

    if (this.answer.nativeElement.value != '') {
      this.answer.nativeElement.value = eval(this.answer.nativeElement.value);

    } else {
      this.answer.nativeElement.value = 0;
    }


  }

  clkone() {
    this.answer.nativeElement.value += '1'
  }
  @HostListener('window:keyup.1') oneEvent() {
    this.mykeyup();
  }
  @HostListener('window:keyup.2') twoEvent() {
    this.mykeyuptwo();
  }
  @HostListener('window:keyup.3') threeEvent() {
    this.mykeyupthree();
  }
  @HostListener('window:keyup.4') fourEvent() {
    this.mykeyupfour();
  }
  @HostListener('window:keyup.5') fiveEvent() {
    this.mykeyupfive();
  }
  @HostListener('window:keyup.6') sixEvent() {
    this.mykeyupsix();
  }
  @HostListener('window:keyup.7') sevenEvent() {
    this.mykeyupseven();
  }
  @HostListener('window:keyup.8') eightEvent() {
    this.mykeyupeight();
  }
  @HostListener('window:keyup.9') nineEvent() {
    this.mykeyupnine();
  }
  @HostListener('window:keyup.0') zeroEvent() {
    this.mykeyupzero();
  }
  @HostListener('window:keyup.+') addEvent() {
    this.mykeyupadd();
  }
  @HostListener('window:keyup.-') subEvent() {
    this.mykeyupsub();
  }
  @HostListener('window:keyup.*') mulEvent() {
    this.mykeyupmul();
  }
  @HostListener('window:keyup.backspace') clsEvent() {
    this.bksp();
  }
  @HostListener('window:keyup.enter') eqEvent() {
    this.equation();
  }



  mykeyup() {
    this.answer.nativeElement.value += '1'
  }
  // forbtn1

  clktwo() {
    this.answer.nativeElement.value += '2'
  }
  mykeyuptwo() {
    this.answer.nativeElement.value += '2'
  }

  clkthree() {
    this.answer.nativeElement.value += '3'
  }
  mykeyupthree() {
    this.answer.nativeElement.value += "3"
  }
  mykeyupzero() {
    this.answer.nativeElement.value += "0"
  }
  clkzero() {
    this.answer.nativeElement.value += "0"
  }
  mykeyupdot() {
    this.answer.nativeElement.value += '.'
  }
  clkdot() {
    this.answer.nativeElement.value += '.'
  }
  mykeyupfour() {
    this.answer.nativeElement.value += '4'
  }
  clkfour() {
    this.answer.nativeElement.value += '4'
  }
  mykeyupfive() {
    this.answer.nativeElement.value += '5'
  }
  clkfive() {
    this.answer.nativeElement.value += '5'
  }
  mykeyupsix() {
    this.answer.nativeElement.value += '6'
  }
  clksix() {
    this.answer.nativeElement.value += '6'
  }

  mykeyupseven() {
    this.answer.nativeElement.value += '7'
  }
  clkseven() {
    this.answer.nativeElement.value += '7'
  }
  mykeyupeight() {
    this.answer.nativeElement.value += '8'
  }
  clkeight() {
    this.answer.nativeElement.value += '8'
  }
  mykeyupnine() {
    this.answer.nativeElement.value += '9'
  }
  clknine() {
    this.answer.nativeElement.value += '9'
  }
  mykeyupadd() {
    this.answer.nativeElement.value += '+'
  }
  clkadd() {
    this.answer.nativeElement.value += '+'
  }
  mykeyupsub() {
    this.answer.nativeElement.value += '-'
  }
  clksub() {
    this.answer.nativeElement.value += '-'
  }
  mykeyupdiv() {
    this.answer.nativeElement.value += '/'
  }
  clkdiv() {
    this.answer.nativeElement.value += '/';

  }
  mykeyupmul() {
    this.answer.nativeElement.value += '*'
  }
  clkmul() {
    this.answer.nativeElement.value += '*'
  }

  clkansw() {
    this.answer.nativeElement.value = eval(this.answer.nativeElement.value)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
