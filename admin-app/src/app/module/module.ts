import { Component } from '@angular/core'
import { ModuleService, Module } from './../services/module.service';


@Component({
    selector: 'module',
    templateUrl: './module.html',
    styleUrls: ['./module.css'],
})

export class ModuleComponent {
    private confirmationMsg: string;
    private isEdit: boolean;
    private _module = new Module();
    private _moduleList: Module[] = [];
    constructor(private service: ModuleService) {
        this.service = service;
    }

    init() {
 this._module = new Module();
    }

    AddRecord() {
        this.isEdit = false;
        this.init();
    }

    SaveRecord() {
        // debugger;    
        this.confirmationMsg = this.service.SaveRecord(this._module);       
        this.GetRecordList();
        this.init();
    }

    GetRecordList() {
        this._moduleList= this.service.GetRecordList();         
    }

    DeleteRecord(name:string) {
        this._moduleList = this.service.DeleteRecord(name);
        this.init();
        this.confirmationMsg=this.service.GetConfirmMessge();
    }

    EditRecord(name: string) {
        this._module = this.service.GetModuleObject(name);
        this.isEdit = true;
    }

    ClearAll(){
        this.isEdit = false;
        this.init();
    }
}