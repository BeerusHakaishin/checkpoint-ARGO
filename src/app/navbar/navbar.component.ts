import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogged: boolean;
  constructor(private route: Router, private authService: AuthService) { 
    this.isLogged = false;
    this.authService.changeEmitted$.subscribe((bool) => {
      this.isLogged = bool;
    });
  }

  ngOnInit(): void {
    const isHeLogged = this.authService.getUserId();
      if (isHeLogged !== undefined) {
      this.isLogged = true;
    }
  }

    onClick(event:any){
    let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      document.body.setAttribute('data-theme', 'dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
    }
  }
   colorTest(systemInitiatedDark:any) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');		
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }

  disconnect() {
    this.authService.logOut().subscribe({
      next: () => {
        this.authService.removeUser();
        this.isLogged = false;
        this.route.navigate(['/home']);
      },
    });
  }
}
