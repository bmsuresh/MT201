import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Http, RequestOptions, Headers } from '@angular/http';


@Injectable()
export class PermissionService {
  private _permissionList: Permission[] = [];
  private confirmationMsg: string;
  private options: RequestOptions = new RequestOptions();
  constructor(private http: HttpClient) {
  }

  SaveRecord(_p: Permission) {
    try {
      this._permissionList.push(_p);
      const queryString = 'name=' + _p.name + '&desc=' + _p.description;
      const url = 'api/add/pm?';
      var result = this.SaveDatabaseRecord(url, queryString);
    }
    catch (error) {
      alert('Error');
      return error;
    }
    return "Permission record added successfully!";
  }

  DeleteRecord(name: string) {
    this._permissionList = this._permissionList.filter(item => item.name != name);
    this.confirmationMsg = "Permission record deleted successfully!";
    return this._permissionList;
  }

  GetRecordList(): any {
    this._permissionList;
    const url = 'api/read/pm?';
    var result = this.ReadDatabaseRecord(url);
  }

  GetPermissionObject(name: string) {
    return this._permissionList.filter(item => item.name == name)[0];
  }

  GetConfirmMessge() {
    return this.confirmationMsg;
  }

  SaveDatabaseRecord(url, queryString): any {
    try {
      const apiurl = 'http://localhost:1027/' + url + queryString;
      alert(apiurl);
      this.http.get(apiurl)
        .subscribe(data => {
          return data;
        },
        err => {
          console.log(err);
          alert('Something went wrong!');
        }
        );
    }
    catch (error) {

    }
  }

  ReadDatabaseRecord(url): any {
    try {
      const apiurl = 'http://localhost:1027/' + url;
      let headers = new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      });
      this.http.get(apiurl, { headers: headers })
        .subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
          alert(apiurl);
        }
        );




    }
    catch (error) {
      alert('Read : Something went wrong!');
    }
  }
}

export class Permission {
  name: string;
  description: string;
}
