import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './pages/login/login.component';
import { WelcomeComponent} from './pages/welcome/welcome.component';
import { ErrorComponent} from './pages/error/error.component';
import { ListTodosComponent} from './pages/list-todos/list-todos.component';
import { LogoutComponent} from './pages/logout/logout.component';
import { RouteGuardService} from './services/route-guard.service';
import { TodoComponent} from './pages/todo/todo.component';

const routes: Routes = [
  {path: '', component: LoginComponent, },
  {path: 'deloitte', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]},
  {path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService]},
  {path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  {path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
