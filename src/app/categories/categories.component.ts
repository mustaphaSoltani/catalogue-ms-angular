import {Component, OnInit} from '@angular/core';
import {CatalogueService} from '../service/catalogue.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private catService: CatalogueService, private router: Router) { }
categories;
  currentCategory; // categorie actuelle
  ngOnInit() {
    this.catService.getAllcategories()
      .subscribe(data => {
        this.categories = data;
      }, error => {
console.log(error);
      });
  }

  onGetProduct(c) {
    this.currentCategory = c;
    const url = c._links.products.href;
    this.router.navigateByUrl('/products/' + btoa(url));
  }
}
