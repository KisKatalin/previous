import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
  


import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { CenzorComponent } from './components/menu/cenzor/cenzor.component';
import { UsersComponent } from './components/menu/users/users.component';
import { TaskComponent } from './components/menu/task/task.component';
import { ActiveMenuComponent } from './components/menu/active-menu/active-menu.component';

const routes: Routes = [
  {path: 'home', component : MenuComponent},
  {path: 'works/cenzor', component : CenzorComponent},
  {path: 'works/users', component : TaskComponent},
  {path: 'works/task', component : UsersComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
