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

  }

  variavel_lista = [];
  variavel_lista_p = [];
  texto: string = "";
  preco: number = 0;
  total: number = 0;


   adiciona() {
    (!(this.texto == ""))
      this.atualizaLista();
      this.variavel_lista.push("0", this.texto);
      this.variavel_lista_p.push(this.preco);
      this.texto = "";

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




  remove(indice) {
    this.variavel_lista.splice(indice, 1)

  }


  voltarPagina(){
    this.router.navigate(['home']);
  }

}
