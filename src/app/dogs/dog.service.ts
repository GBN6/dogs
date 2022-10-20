import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DogsServices {
  private url = 'https://dog.ceo/api/breeds/list/all';
  private url2 = 'https://dog.ceo/api/breed/affenpinscher/images/random'

  constructor(private httpClient: HttpClient) { }

  getDogsBreeds() {
    return this.httpClient.get(this.url)
  }

  getDogImage(value:String) {
    return this.httpClient.get('https://dog.ceo/api/breed/'+value+'/images/random');
  }
}
