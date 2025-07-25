import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './navbar/navbar';
import { Server } from './server/server';
import { Posts } from './posts/posts';
import { Child } from './child/child';
import { DateUser } from './datauser/datauser';
import { Login } from './login/login';
import { NotFound } from './not-found/not-found';

@NgModule({
  declarations: [App, Navbar, Server, Posts, Child, DateUser, Login, NotFound],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
