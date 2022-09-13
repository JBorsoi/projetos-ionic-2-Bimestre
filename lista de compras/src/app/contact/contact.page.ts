import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {

  constructor(private storage:Storage, private router:Router) {
    this.storage.create();
  }

  variavel_lista = [];
  texto: string = "";
  preco: number = 0;
  total: number = 0;
  aux = 0;

  async adiciona() {
    if (!(this.texto == "")) {
      this.variavel_lista.forEach(item => {
        if(parseInt(item[0]) > this.aux) {
          this.aux = parseInt(item[0]);
        }
      })
      this.aux = this.aux + 1;
      await this.storage.set(this.aux.toString(), [this.texto, this.total]);
      this.atualizaLista();
      this.texto = "";
    }
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


  voltarPagina(){
    this.router.navigate(['home']);
  }

}
