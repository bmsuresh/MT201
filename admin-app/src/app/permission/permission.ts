import { Component } from '@angular/core'
import { PermissionService, Permission } from './../services/permission.service';


@Component({
    selector: 'permission',
    templateUrl: './permission.html',
    styleUrls: ['./permission.css'],
})

export class PermissionComponent {
    private confirmationMsg: string;
    private isEdit: boolean;
    private _permission = new Permission();
    private _permissionList: Permission[] = [];
    constructor(private service: PermissionService) {
        this.service = service;
    }

    init() {
 this._permission = new Permission();
    }

    AddRecord() {
        this.isEdit = false;
        this.init();
    }

    SaveRecord() {
        // debugger;    
        this.confirmationMsg = this.service.SaveRecord(this._permission);       
        this.GetRecordList();
        this.init();
    }

    GetRecordList() {
        this._permissionList= this.service.GetRecordList();         
    }

    DeleteRecord(name:string) {
        this._permissionList = this.service.DeleteRecord(name);
        this.init();
        this.confirmationMsg=this.service.GetConfirmMessge();
    }

    EditRecord(name: string) {
        this._permission = this.service.GetPermissionObject(name);
        this.isEdit = true;
    }

    ClearAll(){
        this.isEdit = false;
        this.GetRecordList();
        this.init();
    }
}