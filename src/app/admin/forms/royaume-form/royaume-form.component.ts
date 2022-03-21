import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-royaume-form',
  templateUrl: './royaume-form.component.html',
  styleUrls: ['./royaume-form.component.scss']
})
export class RoyaumeFormComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
