import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private storage:Storage, private router:Router) {
    this.storage.create();
  }


  variavel_lista = [];
  texto: string = "";
  preco: number = 0;
  total: number = 0;
  aux = 0;

  async adiciona() {
    if (!(this.texto == "" || this.preco == 0)) {
      //this.variavel_lista.push("0", this.texto);
      //this.soma();
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

  soma(preco){
    this.total = (+this.total) + (+preco);
  }

  atualizaLista() {
    this.variavel_lista = [];
    this.total = 0;
    this.storage.forEach((value, key, index) => {
      this.variavel_lista.push([key, value]);
      this.soma(value[1]);
    })
  }

  async remove(indice) {
    //this.variavel_lista.splice(indice, 1)
    await this.storage.remove(indice);
    //this.total = this.total - parseFloat(this.variavel_lista[indice][indice][indice]);
    this.atualizaLista();
  }

  mudarPagina(){
    this.router.navigate(['contact'])
  }

  //*ngFor = "let elemento_da_lista of minhaLista" no item
  //[(ngModel)]="texto" no input

}
