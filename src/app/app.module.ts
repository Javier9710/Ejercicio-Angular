import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import{ HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { DirecctivaComponent } from './direcctiva/direcctiva.component';
import { ClientesComponent } from './clientes/clientes.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirecctivaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
