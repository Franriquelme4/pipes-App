import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{
  nombreLower:string = 'francisco';
  nombreUpper:string = 'francisco';
  nombreCompleto:string = 'fraNciscO riqUeLme';
  fecha:Date = new Date();


}
