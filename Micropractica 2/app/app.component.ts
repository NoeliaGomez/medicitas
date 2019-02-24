import { Component } from '@angular/core';
import { EstadoCoche, coche } from './coche';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  filterModel = "";
  bueno = EstadoCoche.BUENO;
  malo = EstadoCoche.MALO;
  coches:Array<coche> = [new coche("seat", "ibiza", "https://www.coches.com/fotos_historicas/seat/Ibiza/high_79553a7c21dd0eae46c9d916f00e8b59.jpg", new Date("01-01-2003"), new Date("01-03-2018"), 1200, EstadoCoche.BUENO), new coche("renault", "scenic", "https://www.renault.es/media/---gamme-fspp/vehicules-particuliers/JFA/product-plan/bsp-sl-limited/attd44de6ee6bb64e58800b71d616ff07d2/renault-scenic-jfa-sl-limited-001_w635_h424_rac.jpg", new Date("01-01-2007"), new Date("01-04-2018"), 5000, EstadoCoche.BUENO), new coche("renault", "megane", "", new Date("01-01-2007"), new Date("01-03-2018"), 3500, EstadoCoche.MALO), new coche("tesla", "model 3", "https://d500.epimg.net/cincodias/imagenes/2018/05/18/motor/1526649630_930114_1526649853_noticia_normal.jpg", new Date("01-01-2018"), new Date("01-03-2018"), 4000, EstadoCoche.BUENO),];

  remove(id){
    this.coches.splice(id, 1);
  }
}
