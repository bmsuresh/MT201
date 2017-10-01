import { Injectable } from '@angular/core';


@Injectable()
export class PermissionService {
  private _permissionList: Permission[] = [];
  private confirmationMsg: string;
  constructor( ) {
  }

  SaveRecord(_p: Permission) {
    try {
      this._permissionList.push(_p);
      
    }
    catch (error) {
      
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
