import { Component } from '@angular/core';
import { MenuComponent } from './menu.component';
import { HeaderComponent } from './app.header';
import { PermissionService } from './services/permission.service'
import { RoleService } from './services/role.service'
import { ModuleService } from './services/module.service'
import { UserService } from './services/users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 providers :[
   MenuComponent,HeaderComponent,PermissionService, RoleService, ModuleService, UserService
   ]  
})

export class AppComponent {
  title = 'User and Role Administration';
}
