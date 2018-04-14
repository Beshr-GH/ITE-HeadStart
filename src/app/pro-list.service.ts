import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ProListService {
log(){
	console.log('ddddddddd');
}

  constructor(private http : Http) { }

  getdata()
  {
    return this.http.get('  /test.json').subscribe(
      (data) => console.log(data)
    );
  }

}
