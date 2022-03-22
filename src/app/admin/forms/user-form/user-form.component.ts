import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user: User | any;
  roles: string[];
  userRole: string;
  name: any;
  role: any;
  
  adminForm = this.fb.group({
    username: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2)]],
    role: ['', Validators.required],
  });
  
  customAlertOptions: any = {
    translucent: true
  };
  router: any;
  
  constructor(private modalCtrl: ModalController , private fb: FormBuilder, private userService: UserService) {
    this.roles = [];
    this.userRole = '';
   }

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      username: [
        this.user.username,
        [Validators.required, Validators.maxLength(20), Validators.minLength(2)],
      ],
      role: [this.userRole, Validators.required],
    });
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  submitForm() {
    this.userService
      .postUser(this.adminForm.value)
      .subscribe({
        next: (user) => {
          this.user = user;
        },
      });
  }
}
