import { Component, OnInit } from '@angular/core';
import { Shoe } from '../shoe';

@Component({
  selector: 'app-shoe-collection',
  templateUrl: './shoe-collection.component.html',
  styleUrls: ['./shoe-collection.component.scss']
})
export class ShoeCollectionComponent implements OnInit {

  shoeList: Shoe[];

  constructor() { 
    this.shoeList = [];
  }

  ngOnInit() {
  }

}
