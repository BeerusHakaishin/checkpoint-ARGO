import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-royaume',
  templateUrl: './royaume.component.html',
  styleUrls: ['./royaume.component.scss']
})
export class RoyaumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    'bandit',
    'batmobile',
    'blues-brothers',
    'bueller',
    'delorean',
    'eleanor',
    'general-lee',
    'ghostbusters',
    'knight-rider',
    'mirth-mobile'
  ];

}
