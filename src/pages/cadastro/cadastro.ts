import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  formCliente: FormGroup;
  anoAtual = (new Date()).getFullYear();
  anoMin = this.anoAtual - 120;
  anoMax = this.anoAtual - 18;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public formBuilder: FormBuilder, 
              public alertCtrl: AlertController) {
    const emailRegex = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
    const hoje = new Date();

    this.formCliente = formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      telefone: ['', Validators.required],
      assinante: false,
      dataNascimento: [hoje.toISOString]    
    });

  }

  onSubmit(){
    let alert =  this.alertCtrl.create({
      title: 'Novo Cliente',
      message: JSON.stringify(this.formCliente.value),
      buttons: ['Ok']
    });
    alert.present(); 

  }

}
