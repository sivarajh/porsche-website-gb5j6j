import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public show:boolean = false;
  public buttonName:any = 'Show';
  public url1: boolean = true;
  public url2: boolean = false;
  public url3: boolean = false;
  public carousel:any = 1;

  constructor() { }

  ngOnInit() { }

  toggle() {
    this.show = !this.show;
  }

  home() {
    this.show = false;
  }

  next() {
    if (this.carousel < 3) {
      this.carousel = this.carousel + 1;

      if (this.carousel === 2) {
        this.url1 = false;
        this.url2 = true;
        this.url3 = false;
      } else if (this.carousel === 3) {
        this.url1 = false;
        this.url2 = false;
        this.url3 = true;
      }
    } else if (this.carousel = 3) {
      this.carousel = 1;
      if (this.carousel === 1) {
        this.url1 = true;
        this.url2 = false;
        this.url3 = false;
      } 
    };
  }


  prev() {
    if (this.carousel > 1) {
      this.carousel = this.carousel - 1;
      if (this.carousel === 2) {
        this.url1 = false;
        this.url2 = true;
        this.url3 = false;
      } else if (this.carousel === 1) {
        this.url1 = true;
        this.url2 = false;
        this.url3 = false;
      } 
    } else {
      this.carousel = 3;
      if (this.carousel === 3) {
        this.url1 = false;
        this.url2 = false;
        this.url3 = true;
      }
    }
  };
}