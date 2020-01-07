import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { AcessoComponent } from './acesso/acesso.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { Step5Component } from './step5/step5.component';
import { AutenticarComponent } from './autenticar/autenticar.component';
import { EsqueciMinhaSenhaComponent } from './esqueci-minha-senha/esqueci-minha-senha.component';
import { AppPasswordDirective } from './app-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Step1Component,
    Step2Component,
    AcessoComponent,
    CadastroComponent,
    Step3Component,
    Step4Component,
    Step5Component,
    AutenticarComponent,
    EsqueciMinhaSenhaComponent,
    AppPasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule, 
    ReactiveFormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
