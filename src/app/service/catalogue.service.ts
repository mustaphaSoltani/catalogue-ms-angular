import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthentificationService} from "./authentification.service";

@Injectable()
export class CatalogueService {
public host = 'http://localhost:8087';
  constructor(private http: HttpClient, private authService: AuthentificationService) { }

getAllcategories() {
return this.http.get(this.host + '/categories');
}
getRessource(url) {
    return this.http.get(url);
}
deleteRessource(url) {
    let header= new  HttpHeaders({'authorization':'Bearer' + this.authService.jwt});
    return this.http.delete(url,{headers:header});
}
postRessource(url, data) {
    let header= new  HttpHeaders({'authorization':'Bearer' + this.authService.jwt});
    return this.http.post(url, data,{headers:header});
}

  putRessource(url, data) {
    let header= new  HttpHeaders({'authorization':'Bearer' + this.authService.jwt});
    return this.http.put(url, data,{headers:header});
  }
  patchRessource(url, data) { // mettre à jour que les données modifiées
    let header= new  HttpHeaders({'authorization':'Bearer' + this.authService.jwt});
    return this.http.patch(url, data,{headers:header});
  }

  getAllProducts() {
    return this.http.get(this.host + '/products');
  }
}
