import { Component, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {

  menuState1:string = 'out';
  menuState2:string = 'out';
  menuState3:string = 'out';
  menuState4:string = 'out';

  autenticarState:string = 'out';

  toggleMenu1() {
    // 1-line if statement that toggles the value:
    this.menuState1 = this.menuState1 === 'out' ? 'in' : 'out';
    this.menuState2 = this.menuState2 = 'out';
    this.menuState3 = this.menuState3 = 'out';
    this.menuState4 = this.menuState4 = 'out';
  }

  toggleMenu2() {
    // 1-line if statement that toggles the value:
    this.menuState2 = this.menuState2 === 'out' ? 'in' : 'out';
    this.menuState1 = this.menuState1 = 'out';
    this.menuState3 = this.menuState3 = 'out';
    this.menuState4 = this.menuState4 = 'out';
  }

  toggleMenu3() {
    // 1-line if statement that toggles the value:
    this.menuState3 = this.menuState3 === 'out' ? 'in' : 'out';
    this.menuState1 = this.menuState1 = 'out';
    this.menuState2 = this.menuState2 = 'out';
    this.menuState4 = this.menuState4 = 'out';
  }

  toggleMenu4() {
    // 1-line if statement that toggles the value:
    this.menuState4 = this.menuState4 === 'out' ? 'in' : 'out';
    this.menuState1 = this.menuState1 = 'out';
    this.menuState3 = this.menuState3 = 'out';
    this.menuState2 = this.menuState2 = 'out';
  }

  toggleAutenticar() {

    this.autenticarState = this.autenticarState === 'out' ? 'in' : 'out';

    this.menuState1 = this.menuState1 = 'out';
    this.menuState2 = this.menuState2 = 'out';
    this.menuState3 = this.menuState3 = 'out';
    this.menuState4 = this.menuState4 = 'out';
  }



}

