import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferComponent } from './components/offer/offer.component';
import { PricesComponent } from './components/prices/prices.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { HttpClient } from '@angular/common/http';
import  {HttpClientModule} from '@angular/common/http';






@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    PricesComponent,
    CharacteristicsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

     getId(){
    var combo = document.getElementById("oferta");
    console.log(combo)
  }
  
  
}
