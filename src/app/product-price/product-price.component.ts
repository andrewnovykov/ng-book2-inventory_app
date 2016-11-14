import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'price-display',
  inputs: ['price'],
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {

  price: number;
  
  constructor() { }

  ngOnInit() {
  }

}
