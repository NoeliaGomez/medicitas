export enum EstadoCoche {BUENO, MALO}

export class coche{
  marca:string;
  modelo:string;
  foto:string;
  fecha_modelo:Date;
  fecha_venta:Date;
  precio:number;
  estado:EstadoCoche;

  constructor(marca:string, modelo:string, foto:string, fecha_modelo:Date, fecha_venta:Date, precio:number, estado:EstadoCoche){
    this.marca = marca;
    this.modelo = modelo;
    this.foto = foto;
    this.fecha_modelo = fecha_modelo;
    this.fecha_venta = fecha_venta;
    this.precio = precio;
    this.estado = estado;
  }

  /* Metodos */
  getPVP():number{
    return this.precio*1.21;
  }
  rebajar(){
    this.precio*=0.9;
  }

}



  