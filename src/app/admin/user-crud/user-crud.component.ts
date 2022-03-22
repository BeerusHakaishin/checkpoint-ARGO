import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserFormComponent } from '../forms/user-form/user-form.component';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-crud',
  templateUrl: './user-crud.component.html',
  styleUrls: ['./user-crud.component.scss']
})
export class UserCrudComponent implements OnInit {
  
  constructor(private modalCtrl: ModalController, private userService: UserService) { }
  users!: User[];
  

  ngOnInit(): void {
    this.getUsers();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: UserFormComponent
    });
    return await modal.present();
  }

  // getUsers(): void {
  //   this.userService
  //     .getUsers()
  //     .subscribe((users: User[]) => (this.users = users));
  // }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (users: User[]) => {
        this.users = users;
      }
    });
  }

}
