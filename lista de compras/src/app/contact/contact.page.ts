import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {

  constructor(private router:Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });
  }

  variavel_lista_n = [];
  variavel_lista_p = [];
  texto_c: string = "";
  preco_c: number = 0;
  data: any;
  

   adiciona() {
    if (!(this.texto_c == "")) 
      this.preco_c = this.data
      this.variavel_lista_n.push(this.texto_c);
      this.variavel_lista_p.push(this.preco_c);
      this.texto_c = "";

    }


  remove(indice) {
    this.variavel_lista_n.splice(indice, 1)
    this.variavel_lista_p.splice(indice, 1);
  }



  voltarPagina(){
    this.router.navigate(['home']);
  }

}
