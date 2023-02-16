import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18Select
  nombre:string = "Francisco";
  genero:string = "femenino"
  invitacionMap = {
    'masculino':"invitarlo",
    'femenino':"invitarla"
  }
  //i18Plural
  clientes:string[] = ['Maria','Jose','Javier','Francisco','Yeru'];

clientesMap = {
  '=0':'no tenemos ningun cliente esperando',
'=1':'tenemos un cliente esperando',
'other':'Tenemos # clientes esperando'

}
cambiarPersona(){
  if (this.genero == 'femenino') {
    this.nombre='Francisco';
    this.genero='masculino';
  }else{
    this.nombre='Francisca';
    this.genero='femenino';
  }
}

borrarCliente(){
  this.clientes.pop();
}

// KeyValue pipe
persona = {
  nombre:'Francisco',
  edad:21,
  direccion:'Capiata'
}

// json pipe
heroes = [{
  nombre:'Superman',
  vuela:true
},
{
  nombre:'Robin',
  vuela:false
},
{
  nombre:'Acuaman',
  vuela:false
}];

// AsynPipe

miObservable = interval(1000);

valorPromesa = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve('Tenemos data de la promesa')
  }, 3500);
})
constructor(){
  this.valorPromesa.then(value => console.log(value)
  )
}

}
