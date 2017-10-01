import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userrolemaping',
  templateUrl: './usermodulemapping.html',
  styleUrls: ['./usermodulemapping.css']
})
export class UserModuleMappingComponent implements OnInit {
private _modules:string[]=[];
private _users:string[]=[];
  constructor() { }

  ngOnInit() {
    this._modules=["Administration", "Purchase","Sales", "Inventory", "Payroll" ];
    this._users=["Administrator","RUser","WUser"];
  }
}


