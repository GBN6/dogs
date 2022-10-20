import { Component, OnInit } from '@angular/core';
import { DogsServices } from './dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  breeds:any;
  list: string[] = []
  objectLink:any;
  link:String = ''
  breedName:String = ''
  picLoaded:Boolean = false;

  constructor(private service:DogsServices) {}


  handleChange(value:String) {
    if (value === '0') {
      this.picLoaded = false;
    } 
    this.breedName = value.charAt(0).toUpperCase() + value.slice(1);
    this.service.getDogImage(value).subscribe(response => {
      this.objectLink = response
      this.link = this.objectLink.message
      this.picLoaded = true;
    })
  }

  ngOnInit() {
    this.service.getDogsBreeds()
      .subscribe(response => {
        this.breeds = response
        for (let i in this.breeds.message) {
            this.list.push(`${i}`)
        }
      })
    }
}