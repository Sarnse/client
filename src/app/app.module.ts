import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
