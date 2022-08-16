import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private storage:Storage) {
    this.storage.create();
  }

  variavel_lista_nome = [];
  variavel_lista_preco = [];
  texto: string = "";
  preco: number;
  aux;

  async adiciona() {
    if (!(this.texto == "")) {
    this.variavel_lista_nome.push(this.texto);
    this.variavel_lista_preco.push(this.preco);
    this.variavel_lista_nome.forEach(item => {
      if(parseInt(item[0]) > this.aux) {
        this.aux = parseInt(item[0]);
      }
    })
    this.aux = this.aux + 1
    await this.storage.set(this.aux.toString(),this.texto);
    this.atualizaLista();
    this.texto = "";
    this.preco = 0;

    }
  }

  atualizaLista() {
    this.variavel_lista_nome = [];
    this.storage.forEach((value, key, index) => {
      this.variavel_lista_nome.push([key, value]);
    })
  }

  remove(indice) {
    this.variavel_lista_nome.splice(indice, 1)
    this.variavel_lista_preco.splice(indice, 1)
  }



  //*ngFor = "let elemento_da_lista of variavel_lista" no item
  //[(ngModel)]="texto" no input

}
