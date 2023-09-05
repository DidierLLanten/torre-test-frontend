import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MaterialModule} from './material/material.module';
import { AutocompleteUsersComponent } from './components/autocomplete-users/autocomplete-users.component';
import { FavoriteUsersComponent } from './components/favorite-users/favorite-users.component'

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteUsersComponent,
    FavoriteUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
