
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleComponent } from  "./role/role"
import { PermissionComponent } from "./permission/permission";
import { ModuleComponent } from "./module/module";
import { UserComponent } from "./users/users";
import { UserRoleMapingComponent } from "./userrolemaping/userrolemaping"; 
import { UserModuleMappingComponent } from "./usermodulemapping/usermodulemapping";

export const router: Routes = [
  //full : makes sure the path is absolute path
  { path: '', redirectTo: 'PermissionComponent', pathMatch: 'full' },
  { path: 'permission', component: PermissionComponent },
  { path: 'role', component: RoleComponent },
  { path: 'module', component: ModuleComponent },
  { path: 'users', component: UserComponent },
  { path: 'userrolemaping', component: UserRoleMapingComponent },
   { path: 'usermodulemapping', component: UserModuleMappingComponent },
  
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
