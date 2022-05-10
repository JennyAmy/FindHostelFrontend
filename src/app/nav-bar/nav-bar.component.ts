import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedInUser: string;

  constructor(private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loggedIn() {
    this.loggedInUser = localStorage.getItem('userName');
    return this.loggedInUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    this.alertify.success('You are logged out!')
    this.router.navigate(['user/login'])
  }
}
