import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Admin } from '../../shared/models/admin.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  admin: Admin | any;
  roles: string[];
  adminRole: string;
  adminForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
    role: ['', Validators.required],
  });
  
  customAlertOptions: any = {
    translucent: true
  };

  constructor(private modalCtrl: ModalController , private fb: FormBuilder) {
    this.roles = [];
    this.adminRole = '';
   }

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      name: [
        this.admin.name,
        [Validators.required, Validators.maxLength(20), Validators.minLength(2)],
      ],
      role: [this.adminRole, Validators.required],
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  submitForm() {
    console.log(this.adminForm.value);
  }
}
