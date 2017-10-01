import { Injectable } from '@angular/core';

@Injectable()
export class ModuleService {
  private _moduleList: Module[] = [];  
  private confirmationMsg: string;
  constructor() {
  }
  
  SaveRecord(_p: Module) {
    try {      
      this._moduleList.push(_p);
    }
    catch (error) {
      return error;
    }
    this.confirmationMsg = "Module record added successfully!";
    return this.confirmationMsg;
  }

  DeleteRecord(name: string) {
    this._moduleList = this._moduleList.filter(item => item.name != name);
    this.confirmationMsg = "Module record deleted successfully!";
    return  this._moduleList ;
  }

  GetRecordList() {
    return this._moduleList;
  }

  GetModuleObject(name: string) {
    return this._moduleList.filter(item => item.name == name)[0];
  }

  GetConfirmMessge()
  {
    return this.confirmationMsg;
  }
}

export class Module {
  name: string;
  description: string;
}
