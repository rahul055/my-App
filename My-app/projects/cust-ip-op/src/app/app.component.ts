import { Component, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cust-ip-op';

  @ViewChild("test", { static: false })
  test: ElementRef;



  bgClr: string = "#DDE8B9";
  bgHeader: string = "yellow";

  inputstr: string = 'Hi, Im your parent';



  getdata(value) {
    console.log(value)
    this.test.nativeElement.innerHTML = value;

  }


}
