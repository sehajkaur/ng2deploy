import { Injectable } from '@angular/core';
import {DUMMY_DATA} from './data/dummy-data';
import {CartoonCharacter} from './cartoon-character';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class CartoonCharacterService {

  constructor(private http: Http) { }
  private BASE_URL = "http://flintstones.zift.ca/api/flintstones";
  private headers = new Headers({'Content-Type': 'application/json'});

 getCartoonCharacters(): Promise<CartoonCharacter[]> {
  return this.http.get(this.BASE_URL)
   .toPromise()
   .then(response => response.json() as CartoonCharacter[])
   .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}


  getCartoonCharacterById(id: number): Promise<CartoonCharacter> {
  return this.getCartoonCharacters()
    .then(result => result.find(character => character.PersonId === id));
}

update(character: CartoonCharacter): Promise<CartoonCharacter> {
  const url = `${this.BASE_URL}/${character.PersonId}`;
  return this.http
    .put(url, JSON.stringify(character), {headers: this.headers})
    .toPromise()
    .then(() => character)
    .catch(this.handleError);
}

create(newCartoonCharacter: CartoonCharacter): Promise<CartoonCharacter> {
  return this.http
    .post(this.BASE_URL, JSON.stringify(newCartoonCharacter), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
}

    
}
