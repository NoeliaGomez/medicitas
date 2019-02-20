import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public cod_product;
  public total = 0;
  productos = [['Arroz tres delicias',0], ['Ternera con bambú y setas',1], ['Cerdo agridulce',2]];
  precioProductos = [3.5, 7, 5.5];
  consumiciones = [];

  add(){
    if (this.cod_product >= 0) {
      this.consumiciones.push(this.productos[this.cod_product]);
      this.total += this.precioProductos[this.cod_product];
    }
  }
  remove(index){
    this.total -= this.precioProductos[this.consumiciones[index][1]];
    this.consumiciones.splice(index, 1);
  }
}
