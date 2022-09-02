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

  ngOnInit(){
    this.atualizaLista();
  }

  variavel_lista = [];
  texto: string = "";
  preco: number = 0;
  total: number = 0;
  aux = 0;

  async adiciona() {
    if (!(this.texto == "" || this.preco == 0)) {
      //this.variavel_lista.push("0", this.texto);
      this.soma();
      this.variavel_lista.forEach(item => {
        if(parseInt(item[0]) > this.aux) {
          this.aux = parseInt(item[0]);
        }
      })
      this.aux = this.aux + 1;
      await this.storage.set(this.aux.toString(), [this.texto, this.preco]);
      this.atualizaLista();
      this.texto = "";
      this.preco = 0;
    }

      /*
    if (this.texto == "") {

    } else{
      this.variavel_lista.push(this.texto);
      this.texto = "";
    }*/

  }

  soma(){
    this.total = (+this.total) + (+this.preco);
  }

  atualizaLista() {
    this.variavel_lista = [];
    this.storage.forEach((value, key, index) => {
      this.variavel_lista.push([key, value]);
    })
  }

  async remove(indice) {
    //this.variavel_lista.splice(indice, 1)
    this.total = this.total - parseInt(this.variavel_lista[indice][1][1]);
    await this.storage.remove(indice);
    this.atualizaLista();
  }

  //*ngFor = "let elemento_da_lista of minhaLista" no item
  //[(ngModel)]="texto" no input

}
