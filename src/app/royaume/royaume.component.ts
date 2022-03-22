import { Component, OnInit } from '@angular/core';
import { Argonaute } from '../admin/shared/models/argonaute.model';
import { RoyaumeService } from '../shared/services/royaume.service';

@Component({
  selector: 'app-royaume',
  templateUrl: './royaume.component.html',
  styleUrls: ['./royaume.component.scss']
})
export class RoyaumeComponent implements OnInit {
  argonautes!: Argonaute[];
  constructor(private royaumeService: RoyaumeService) { 
    this.argonautes = [];
  }

  ngOnInit(): void {
    this.getArgonautes();
  }
  
  //Return la liste d'argonaute
  getArgonautes() {
    this.royaumeService.getArgonautes().subscribe({
      next: (argonautes) => {
        this.argonautes = argonautes;
        console.log(this.argonautes)
      },
    });
  }

}
