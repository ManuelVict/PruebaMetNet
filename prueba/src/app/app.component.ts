import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppModule } from './app.module';
import { JsonService } from './jsonservice';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'prueba';
  datos: any[] = [];
  newJson:any[]=[];
  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';
  constructor(public json: JsonService) {

  }
 
  ngOnInit() {
    this.json.getJson('https://api.npoint.io/5c3145a872b75c2d039c').subscribe((res: any) => {
      //console.log(res);
      this.datos = res;
      console.log(this.datos)
     
    })
  }
  capturar(){
    
    this.opcionSeleccionado=(<HTMLInputElement>document.getElementById('ss')).value;
    //console.log(this.opcionSeleccionado)
    this.datos.forEach((aux) => {
     
      if(aux.id == this.opcionSeleccionado){
        
        var mostrarDatos=aux;
        this.newJson=mostrarDatos;
        console.log(mostrarDatos)
      }
  });
}
}




