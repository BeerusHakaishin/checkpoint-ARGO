import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-crud',
  templateUrl: './home-crud.component.html',
  styleUrls: ['./home-crud.component.scss']
})
export class HomeCrudComponent implements OnInit {
  cards = [
    0,1,2,3,4,5,6
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
