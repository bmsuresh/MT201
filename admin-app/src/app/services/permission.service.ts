import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PermissionService {
  private _permissionList: Permission[] = [];
  private confirmationMsg: string;
  constructor(private http: HttpClient ) {
  }

  SaveRecord(_p: Permission) {
    try {
      this._permissionList.push(_p);
      const body = { name: _p.name, desc: _p.description };
      const url="http://localhost:1027/api/add/pm";
      this.http.post(url, body).subscribe();    
      
    }
    catch (error) {
      alert('error occured.');
      return error;
    }
    return "Permission record added successfully!";
  }

  DeleteRecord(name: string) {
    this._permissionList = this._permissionList.filter(item => item.name != name);
    this.confirmationMsg = "Permission record deleted successfully!";
    return this._permissionList;
  }

  GetRecordList() {
    return this._permissionList;
  }

  GetPermissionObject(name: string) {
    return this._permissionList.filter(item => item.name == name)[0];
  }

  GetConfirmMessge() {
    return this.confirmationMsg;
  }
}

export class Permission {
  name: string;
  description: string;
}
