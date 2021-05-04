import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppModule } from './app.module';
import {JsonService} from './jsonservice';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
  constructor(public json: JsonService ){
    this.json.getJson('http://localhost:4200/assets/ofertas.json').subscribe((res:any)=>{
      console.log(res); 
    })
  }




  ngOnInit() {
  }

  
}



