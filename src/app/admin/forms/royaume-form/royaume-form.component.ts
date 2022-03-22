import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Argonaute } from '../../shared/models/argonaute.model';

@Component({
  selector: 'app-royaume-form',
  templateUrl: './royaume-form.component.html',
  styleUrls: ['./royaume-form.component.scss']
})
export class RoyaumeFormComponent implements OnInit {
  argonaute : Argonaute | any;

  public equipageForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(2)]],
    description: ['', [Validators.required, Validators.minLength(2)]],
    dob: ['', [Validators.required]],
  });

  constructor(private modalCtrl: ModalController,private fb: FormBuilder) {
   }

  ngOnInit(): void {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  submitForm() {
    console.log(this.equipageForm.value);
  }
}
