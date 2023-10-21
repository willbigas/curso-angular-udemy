import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TitleComponent} from './title/title.component';
import {DataBidingComponent} from './data-biding/data-biding.component';
import {FormsModule} from "@angular/forms";
import {DiretivasEstruturaisComponent} from './diretivas-estruturais/diretivas-estruturais.component';
import {DiretivasAtributosComponent} from './diretivas-atributos/diretivas-atributos.component';

// **************************************************
import ptBr from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
import {CpfPipe} from "./pipe/CpfPipe";

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DataBidingComponent,
    DiretivasEstruturaisComponent,
    DiretivasAtributosComponent,
    CpfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
