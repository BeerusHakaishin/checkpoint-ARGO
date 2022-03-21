import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AboutFormComponent } from '../forms/about-form/about-form.component';

@Component({
  selector: 'app-about-crud',
  templateUrl: './about-crud.component.html',
  styleUrls: ['./about-crud.component.scss']
})
export class AboutCrudComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit(): void {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AboutFormComponent
    });
    return await modal.present();
  }

}
