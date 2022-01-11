import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { CenzorComponent } from './components/menu/cenzor/cenzor.component';
import { UsersComponent } from './components/menu/users/users.component';
import { TaskComponent } from './components/menu/task/task.component';
import { ChildComponent } from './components/menu/users/child/child.component';
import { ActiveMenuComponent } from './components/menu/active-menu/active-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CenzorComponent,
    UsersComponent,
    TaskComponent,
    ChildComponent,
    ActiveMenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
