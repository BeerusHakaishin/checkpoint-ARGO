import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RoyaumeFormComponent } from '../forms/royaume-form/royaume-form.component';

@Component({
  selector: 'app-royaume-crud',
  templateUrl: './royaume-crud.component.html',
  styleUrls: ['./royaume-crud.component.scss']
})
export class RoyaumeCrudComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit(): void {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: RoyaumeFormComponent
    });
    return await modal.present();
  }
}
