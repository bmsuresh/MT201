
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { routes } from './app.route'
import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { HeaderComponent } from './app.header';
import { FooterComponent } from './app.footer';
import { PermissionComponent } from './permission/permission';
import { RoleComponent } from './role/role';
import { UserComponent } from './users/users';
import { UserRoleMapingComponent } from './userrolemaping/userrolemaping';
import { UserModuleMappingComponent } from './usermodulemapping/usermodulemapping';

import { ModuleComponent } from  './module/module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    PermissionComponent,
    RoleComponent,
    UserComponent,
    UserRoleMapingComponent,
    ModuleComponent,
    UserModuleMappingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
