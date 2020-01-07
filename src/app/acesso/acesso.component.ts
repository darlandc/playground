import { Component, OnInit } from '@angular/core';
import { style, trigger, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.sass'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({ 
        opacity: 1
      })),
      transition('void => criado', [
        style({ 
          opacity: 0, 
          transform: 'translate(-50px, 0)' }),
      animate('500ms 0s ease-in-out')
     ])
  ]),
  trigger('animacao-painel', [
    state('criado', style({ 
        opacity: 1
      })),
    transition('void => criado', [
      style({ 
        opacity: 0, 
        transform: 'translate(50px, 0)' }),
      animate('500ms 0 ease-in-out')
    ])
  ])
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner: string = 'string'
  public estadoPainel: string = 'string'

  public cadastro: boolean = false

  constructor() { }

  ngOnInit() {
  }

  public exibirPainel(event: string) : void {
    this.cadastro = event === 'cadastro' ? true : false
  }

}
