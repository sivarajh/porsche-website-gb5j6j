import { Component, OnInit } from '@angular/core';

import { products } from '../products';



@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})

export class ModelsComponent implements OnInit {

  products = products;
  public show:boolean = false;
  public model1:boolean = false;
  public model2:boolean = false;
  public model3:boolean = false;
  public buttonName:any = 'Show';
  public name:any = "";
  public compare:boolean = false;
  public cartView:boolean = false;

  constructor() { }

  buy(productId) {
    if (productId==0) {
      this.model1 = true;
      this.model2 = false;
      this.model3 = false;
    } else if (productId==1) {
      this.model1 = false;
      this.model2 = true;
      this.model3 = false;
    } else if (productId==2) {
      this.model1 = false;
      this.model2 = false;
      this.model3 = true;
    }
    this.show = !this.show;
  }
  toggle() {
    this.show = !this.show;
  }


  compareModels() {
    this.compare = !this.compare
  }

  showCart () {
    this.cartView = !this.cartView;
  }

  purchase () {
    this.cartView = false;
    window.alert("Congratulations! Your Car will be Shipped to a Dealership and you Will be Notified!")
  }
}