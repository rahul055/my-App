import { ProgressService } from './../progress.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  providers: [ProgressService],

})
export class ProgressComponent implements OnInit {

  constructor(
    private progress: ProgressService
  ) { }


  prog = 30


  ngOnInit(): void {
    this.progress.em.subscribe(dt => console.log(dt)
      //    {
      //   if (dt === 1) {
      //     this.progress += 10
      //   } else {
      //     this.progress -= 10
      //   }
      // }
    )
  }

}
