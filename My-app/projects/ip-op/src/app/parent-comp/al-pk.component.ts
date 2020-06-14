import { EvAl } from './ev-al';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-al-pk',
  templateUrl: './al-pk.component.html',
  styleUrls: ['./al-pk.component.css']
})
export class AlPkComponent implements OnInit {


  @Output()
  picked: EventEmitter<EvAl> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {


  }
  onpick(al: string) {
    let evAl: EvAl = {
      al: al
    }
    this.picked.emit(evAl)
  }

}
