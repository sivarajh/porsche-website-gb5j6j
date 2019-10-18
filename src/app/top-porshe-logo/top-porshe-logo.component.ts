import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-porshe-logo',
  templateUrl: './top-porshe-logo.component.html',
  styleUrls: ['./top-porshe-logo.component.css']
})
export class TopPorsheLogoComponent implements OnInit {
  
  public show:boolean = false
  constructor() {

   }

  ngOnInit() {
  }

  toggle() {
    this.show = !this.show;
  }
}