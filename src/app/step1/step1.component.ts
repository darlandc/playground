import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CustomValidators } from '../custom-validators';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.sass'],
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
export class Step1Component implements OnInit {

  @Output() public exibir: EventEmitter<string> = new EventEmitter();
  menuState: string;

  toggleMenu1() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }


  public frmSignup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.frmSignup = this.createSignupForm();
  }

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        email: [
          'darlandc@gmail.com',
          Validators.compose([Validators.email, Validators.required])
        ],
        password: [
          'R0dney@90',
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // check whether the entered password has a special character
            CustomValidators.patternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true
              }
            ),
            Validators.minLength(8)
          ])
        ],
       // confirmPassword: [null, Validators.compose([Validators.required])]
      },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }

  submit() {
    // do signup or something
    console.log(this.frmSignup.value);
  }



  ngOnInit() {
    console.log(this.frmSignup.status);
  }

  public next(){
    console.log('testing')
  }




}
