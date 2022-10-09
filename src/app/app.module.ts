import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaCreaterComponent } from './pizza-creater/pizza-creater.component';
import { PizzaListFromApiComponent } from './pizza-list-from-api/pizza-list-from-api.component';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaCreaterComponent,
    PizzaListFromApiComponent,
    PizzaDetailComponent
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
