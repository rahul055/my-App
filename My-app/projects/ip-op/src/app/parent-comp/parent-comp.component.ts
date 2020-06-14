import { EvAl } from './ev-al';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  evAl: EvAl
  constructor() { }

  ngOnInit(): void {
  }
  captureAlert(evAl: EvAl) {
    console.log(`event received ${evAl}`)
    this.evAl = evAl
  }

}
