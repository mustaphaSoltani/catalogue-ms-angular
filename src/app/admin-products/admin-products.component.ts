import { Component, OnInit } from '@angular/core';
import {CatalogueService} from "../service/catalogue.service";

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products;
  mode = 'list';

  constructor(private catalogService: CatalogueService) { }

  ngOnInit() {
    this.onGetAllCategories();
  }
  onGetAllCategories() {
    this.catalogService.getAllProducts()
      .subscribe(data => {
        this.products = data;
      }, error => {
        console.log(error);
      });
  }
  onDeleteProd(c: any) {

  }

  onEditProd(c: any) {

  }
}
