import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { DirecctivaComponent } from './direcctiva/direcctiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService} from './clientes/cliente.service';
import { RouterModule, Routes} from '@angular/router';


import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import {FormsModule} from '@angular/forms';

import localeES from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localeES, 'es');


const routes: Routes = [
  {path: '', redirectTo:'/clientes', pathMatch: 'full'},
  {path: 'directivas', component: DirecctivaComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirecctivaComponent,
    ClientesComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
