import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserFormComponent } from '../forms/user-form/user-form.component';
import { Role } from '../shared/models/role.model';
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

  isAdminOrNo(allRoles: Role[]) {
    const roles: string[] = [];
    allRoles.forEach((role) => {
      roles.push(role.name);
    });
    if (roles.includes('ROLE_ADMIN')) {
      return 'Admin';
    } else return 'User';
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (users: User[]) => {
        this.users = users;
      }
    });
  }
  
  deleteUser(id: number) {
    if (confirm('Confirmez vous la suppression de cet administrateur ?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.getUsers();
        } 
      });
    } 
  }

}
