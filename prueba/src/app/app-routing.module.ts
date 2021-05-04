import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricesComponent } from './components/prices/prices.component';

const routes: Routes = [
  { path:'price', component: PricesComponent  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
