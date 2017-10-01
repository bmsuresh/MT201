import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userrolemaping',
  templateUrl: './userrolemaping.html',
  styleUrls: ['./userrolemaping.css']
})
export class UserRoleMapingComponent implements OnInit {
private _roles:string[]=[];
private _users:string[]=[];
  constructor() { }

  ngOnInit() {
    this._roles=["Admin", "Reader","Writer"];
    this._users=["Adminstrator","RUser","WUser"];
  }
}


