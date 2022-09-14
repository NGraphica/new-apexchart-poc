import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasktwo',
  templateUrl: './tasktwo.component.html',
  styleUrls: ['./tasktwo.component.scss']
})
export class TasktwoComponent implements OnInit {

  show: boolean = false;

  constructor() {
  }

  ngOnInit() {
    
  }

  showModal(){
    this.show = !this.show;
    console.log("I'm clicked");
  }

}
