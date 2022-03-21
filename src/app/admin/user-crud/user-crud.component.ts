import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserFormComponent } from '../forms/user-form/user-form.component';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.scss']
})
export class UserCrudComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit(): void {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: UserFormComponent
    });
    return await modal.present();
  }

}
