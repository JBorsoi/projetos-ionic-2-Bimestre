import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  resultado: string = "0";
  memoria: string = ""
  termo_1: string = "";
  termo_2: string = "";
  operador_ativo: boolean = false;
  operador_selecionado: string = "";
  calculo_ativo; boolean = false;

  calcular() {
    let termo1 = parseInt(this.termo_1);
    let termo2 = parseInt(this.termo_2);

    this.memoria = this.resultado + "=";

    if (this.operador_selecionado == "+") {
      this.resultado = (termo1 + termo2).toString();
    }

    if (this.operador_selecionado == "-") {
      this.resultado = (termo1 - termo2).toString();  
    }

    if (this.operador_selecionado == "*") {
      this.resultado = (termo1 * termo2).toString(); 
    }

    if (this.operador_selecionado == "/") {
      this.resultado = (termo1 / termo2).toString(); 
    }

    this.calculo_ativo = true;
    this.operador_ativo = false;

    this.memoria = this.memoria + this.resultado;
    //toString faz inteiro para valor
    //parseInt tranforma string em inteiro.
    //this.resultado = this.termo_1 this.termo_2;
  }

  digito(valor) {
    if(this.operador_ativo == false) {
      if(this.calculo_ativo == true) {
        this.calculo_ativo = false;
        //this.resultado = valor;
        this.limpar();
      }
      if (this.resultado == "0") {
        this.resultado = valor;
      }
      else {
        this.resultado = this.resultado + valor;
      }
    }
    else {
      this.resultado = this.resultado + valor;
      this.termo_2 = this.termo_2 + valor;
    }
  }

  operador(operacao) {
    this.termo_1 = this.resultado;
    this.resultado = this.resultado + operacao;
    this.operador_ativo = true;
    this.operador_selecionado = operacao; 
  }

  

  limpar() {
    this.resultado = "0";
    this.operador_ativo = false;
    this.termo_1 = "0";
    this.termo_2 = "0";
    this.memoria = this.memoria;
  }

}
