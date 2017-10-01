import { Component } from '@angular/core'
import { UserService, User } from './../services/users.service';

@Component({
    selector: 'users',
    templateUrl: './users.html',
    styleUrls: ['./users.css'],
})

export class UserComponent {
    private confirmationMsg: string;
    private isEdit: boolean;
    private _user = new User();
    private _userList: User[] = [];
    constructor(private service: UserService) {
        this.service = service;
    }

    init() {
 this._user = new User();
    }

    AddRecord() {
        this.isEdit = false;
        this.init();
    }

    SaveRecord() {
        // debugger;    
        this.confirmationMsg = this.service.SaveRecord(this._user);       
        this.GetRecordList();
        this.init();
    }

    GetRecordList() {
        this._userList = this.service.GetRecordList();        
    }

    DeleteRecord(name:string) {
        this._userList = this.service.DeleteRecord(name);
        this.init();
        this.confirmationMsg=this.service.GetConfirmMessge();
    }

    EditRecord(name: string) {
        this._user = this.service.GetUserObject(name);
        this.isEdit = true;
    }

    ClearAll(){
        this.isEdit = false;
        this.init();
    }
    
}