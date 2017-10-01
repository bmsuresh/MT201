import { Injectable } from '@angular/core';

@Injectable()
export class RoleService {
  private _roleList: Role[] = [];  
  private confirmationMsg: string;
  constructor() {
  }
  
  SaveRecord(_p: Role) {
    try {      
      this._roleList.push(_p);
    }
    catch (error) {
      return error;
    }
    this.confirmationMsg = "Role record added successfully!";
    return this.confirmationMsg;
  }

  DeleteRecord(name: string) {
    this._roleList = this._roleList.filter(item => item.name != name);
    this.confirmationMsg = "Role record deleted successfully!";
    return  this._roleList ;
  }

  GetRecordList() {
    return this._roleList;
  }

  GetRoleObject(name: string) {
    return this._roleList.filter(item => item.name == name)[0];
  }

  GetConfirmMessge()
  {
    return this.confirmationMsg;
  }
}

export class Role {
  name: string;
  description: string;
}
