import { Component } from '@angular/core'
import { RoleService, Role } from './../services/role.service';

@Component({
    selector: 'role',
    templateUrl: './role.html',
    styleUrls: ['./role.css'],

})

export class RoleComponent {
    private confirmationMsg: string;
    private isEdit: boolean;
    private _role = new Role();
    private _roleList: Role[] = [];
    constructor(private service: RoleService) {
        this.service = service;
    }

    init() {
 this._role = new Role();
    }

    AddRecord() {
        this.isEdit = false;
        this.init();
    }

    SaveRecord() {
        // debugger;    
        this.confirmationMsg = this.service.SaveRecord(this._role);       
        this.GetRecordList();
        this.init();
    }

    GetRecordList() {
        this._roleList = this.service.GetRecordList();        
    }

    DeleteRecord(name:string) {
        this._roleList = this.service.DeleteRecord(name);
        this.init();
        this.confirmationMsg=this.service.GetConfirmMessge();
    }

    EditRecord(name: string) {
        this._role = this.service.GetRoleObject(name);
        this.isEdit = true;
    }

    ClearAll(){
        this.isEdit = false;
        this.init();
    }
    
}