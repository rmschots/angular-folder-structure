import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-dropdown',
  templateUrl: './login-dropdown.component.html',
  styleUrls: ['./login-dropdown.component.css']
})
export class LoginDropdownComponent implements OnInit {

  dropdownShown: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDropdown() {
    this.dropdownShown = !this.dropdownShown;
  }

}
