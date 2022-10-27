import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPageComponent } from './edit-page/edit-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PizzaUpdaterComponent } from './pizza-updater/pizza-updater.component';

const routes: Routes = [
  {path:"Home",component:HomepageComponent},
  {path:"EditPizza/:id",component:PizzaUpdaterComponent},
  {path:"Edit",component:EditPageComponent},
  
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
