import {Component, OnInit} from '@angular/core';
import {CatalogueService} from "../service/catalogue.service";

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  categories;
  mode = 'list';
  currentCategorie;

  constructor(private catalogService: CatalogueService) {
  }

  ngOnInit() {
    this.onGetAllCategories();
  }

  onGetAllCategories() {
    this.catalogService.getAllcategories()
      .subscribe(data => {
        this.categories = data;
      }, error => {
        console.log(error);
      });
  }

  onDeleteCat(cat) {
    let c: boolean = confirm('Etes vous sur!!');
    if (!c) {
      return;
    }
    this.catalogService.deleteRessource(cat._links.self.href)
      .subscribe(data => {
        this.onGetAllCategories();
      }, error => {
        console.log(error);
      });
  }

  onNewCat() {
    this.mode = 'new-cat';
  }

  onSaveCat(data) {
    let url = this.catalogService.host + '/categories';
    this.catalogService.postRessource(url, data)
      .subscribe(ca => {
        this.mode = 'list';
        this.onGetAllCategories();
      }, error => {
        console.log(error);
      });
  }

  onEditCat(cat: any) {
    this.catalogService.getRessource(cat._links.self.href)
      .subscribe(data => {
        this.currentCategorie = data;
        this.mode = 'edit-cat';
      }, error => {
        console.log(error);
      });
  }

  onUpdateCat(data) {
    this.catalogService.putRessource(this.currentCategorie._links.self.href, data)
      .subscribe(ca => {
        this.mode = 'list';
        this.onGetAllCategories();
      }, error => {
        console.log(error);
      });
  }
}
