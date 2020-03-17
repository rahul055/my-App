import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-link',
  templateUrl: './video-link.component.html',
  styleUrls: ['./video-link.component.css']
})
export class VideoLinkComponent implements OnInit {

  constructor() { }

  @Input()
  myinp: string;


  @Output() myopt: EventEmitter<string> = new EventEmitter;

  optstring = `<iframe width="560" height="300" src="https://www.youtube.com/embed/fEErySYqItI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

  onclk() {
    this.myopt.emit(this.optstring)
  }


  youtubestr = `<iframe width="560" height="300" src="https://www.youtube.com/embed/6lt2JfJdGSY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

  onsecondclk() {
    this.myopt.emit(this.youtubestr)

  }

  dolphins = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MdRLVgRRce8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

  onthirdclk() {
    this.myopt.emit(this.dolphins)
  }

  kingfisher = `<iframe width="560" height="315" src="https://www.youtube.com/embed/5dnouQtSIL0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

  onfourthclk() {
    this.myopt.emit(this.kingfisher)
  }

  desert = `<iframe width="560" height="315" src="https://www.youtube.com/embed/n4crvs-KTBw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  onfifthclk() {
    this.myopt.emit(this.desert)
  }




  ngOnInit(): void {
    console.log(this.myinp)

  }

}
