import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { ListTodosComponent } from './pages/list-todos/list-todos.component';
import { BasicAuthenticationService } from './services/basic-authentication.service';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { TodoComponent } from './pages/todo/todo.component';
import { HttpIntercepterBasicAuthService } from './services/http-intercepter-basic-auth.service';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BasicAuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
