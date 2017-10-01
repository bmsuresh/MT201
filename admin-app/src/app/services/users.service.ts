import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private _userList: User[] = [];  
  private confirmationMsg: string;
  constructor() {
  }
  
  SaveRecord(_p: User) {
    try {      
      this._userList.push(_p);
    }
    catch (error) {
      return error;
    }
    this.confirmationMsg = "User record added successfully!";
    return this.confirmationMsg;
  }

  DeleteRecord(name: string) {
    this._userList = this._userList.filter(item => item.name != name);
    this.confirmationMsg = "User record deleted successfully!";
    return  this._userList ;
  }

  GetRecordList() {
    return this._userList;
  }

  GetUserObject(name: string) {
    return this._userList.filter(item => item.name == name)[0];
  }

  GetConfirmMessge()
  {
    return this.confirmationMsg;
  }
}

export class User {
  name: string;
  description: string;
}
