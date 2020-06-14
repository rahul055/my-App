import { EvAl } from './ev-al';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-al-mn',
  templateUrl: './al-mn.component.html',
  styleUrls: ['./al-mn.component.css']
})
export class AlMnComponent implements OnInit {


  @Input()
  al: EvAl


  constructor() { }

  ngOnInit(): void {
  }

}
