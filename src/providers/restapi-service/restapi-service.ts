import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RestapiServiceProvider {
  apiBaseUrl = 'https://reliancelaturpattern.com/schoolapp/api/';

  constructor(public http: Http) {
    console.log('Hello RestapiServiceProvider Provider');
  }

  // Post api syntax for user login
  loginUser(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.apiBaseUrl + 'studentapi.php/login', JSON.stringify(credentials), { headers: headers })
        .map((res) => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  // End Post api syntax for user login
}