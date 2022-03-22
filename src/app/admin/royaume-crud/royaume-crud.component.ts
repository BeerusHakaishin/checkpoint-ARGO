import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RoyaumeService } from 'src/app/shared/services/royaume.service';
import { RoyaumeFormComponent } from '../forms/royaume-form/royaume-form.component';
import { Argonaute } from '../shared/models/argonaute.model';

@Component({
  selector: 'app-royaume-crud',
  templateUrl: './royaume-crud.component.html',
  styleUrls: ['./royaume-crud.component.scss']
})
export class RoyaumeCrudComponent implements OnInit {
  argonautes!: Argonaute[];
  
  constructor(private modalCtrl: ModalController, private royaumeService: RoyaumeService) {
    this.argonautes = [];
   }

  ngOnInit(): void {
    this.getArgonautes();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: RoyaumeFormComponent
    });
    return await modal.present();
  }

  //Return la liste d'argonaute
  getArgonautes() {
    this.royaumeService.getArgonautes().subscribe({
      next: (argonautes) => {
        this.argonautes = argonautes;
      },
    });
  }

  deleteArgonaute(id: number) {
    if (confirm('Confirmez vous la suppression de cet argonaute ?')) {
      this.royaumeService.deleteArgonaute(id).subscribe({
        next: () => {
          this.getArgonautes();
        },
      });
    } 
  }
}
