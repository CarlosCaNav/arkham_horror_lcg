import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArkhamLCG';

  masUno: number = 0;
  cero: number = 0;
  menosUno: number = 0;
  menosDos: number = 0;
  menosTres: number = 0;
  menosCuatro: number = 0;
  menosCinco: number = 0;
  menosSeis: number = 0;
  menosSiete: number = 0;
  menosOcho: number = 0;
  calavera: number = 0;
  sectario: number = 0;
  cosaAzul: number = 0;
  fallo: number = 0;
  arcano: number = 0;
  resultado: number = 0;
  resultadoFinal: number = 0;


  FmasUno(unidad: number) {
    this.masUno = unidad += this.masUno;
    if (this.masUno > 8) {
      this.masUno = 8
    }
    else if (this.masUno < 0) {
      this.masUno = 0
    }
  }
  Fcero(unidad: number) {
    this.cero = unidad += this.cero;
    if (this.cero > 8) {
      this.cero = 8
    }
    else if (this.cero < 0) {
      this.cero = 0
    }
  }
  FmenosUno(unidad: number) {
    this.menosUno = unidad += this.menosUno;
    if (this.menosUno > 8) {
      this.menosUno = 8
    }
    else if (this.menosUno < 0) {
      this.menosUno = 0
    }
  }
  FmenosDos(unidad: number) {
    this.menosDos = unidad += this.menosDos;
    if (this.menosDos > 8) {
      this.menosDos = 8
    }
    else if (this.menosDos < 0) {
      this.menosDos = 0
    }
  }
  FmenosTres(unidad: number) {
    this.menosTres = unidad += this.menosTres;
    if (this.menosTres > 8) {
      this.menosTres = 8
    }
    else if (this.menosTres < 0) {
      this.menosTres = 0
    }
  }
  FmenosCuatro(unidad: number) {
    this.menosCuatro = unidad += this.menosCuatro;
    if (this.menosCuatro > 8) {
      this.menosCuatro = 8
    }
    else if (this.menosCuatro < 0) {
      this.menosCuatro = 0
    }
  }
  FmenosCinco(unidad: number) {
    this.menosCinco = unidad += this.menosCinco;
    if (this.menosCinco > 8) {
      this.menosCinco = 8
    }
    else if (this.menosCinco < 0) {
      this.menosCinco = 0
    }
  }
  FmenosSeis(unidad: number) {
    this.menosSeis = unidad += this.menosSeis;
    if (this.menosSeis > 8) {
      this.menosSeis = 8
    }
    else if (this.menosSeis < 0) {
      this.menosSeis = 0
    }
  }
  FmenosSiete(unidad: number) {
    this.menosSiete = unidad += this.menosSiete;
    if (this.menosSiete > 8) {
      this.menosSiete = 8
    }
    else if (this.menosSiete < 0) {
      this.menosSiete = 0
    }
  }
  FmenosOcho(unidad: number) {

    this.menosOcho = unidad += this.menosOcho;
    if (this.menosOcho > 8) {
      this.menosOcho = 8
    }
    else if (this.menosOcho < 0) {
      this.menosOcho = 0
    }
  }
  Fcalavera(unidad: number) {
    this.calavera = unidad += this.calavera;
    if (this.calavera > 8) {
      this.calavera = 8
    }
    else if (this.calavera < 0) {
      this.calavera = 0
    }
  }
  FcosaAzul(unidad: number) {
    this.cosaAzul = unidad += this.cosaAzul;
    if (this.cosaAzul > 8) {
      this.cosaAzul = 8
    }
    else if (this.cosaAzul < 0) {
      this.cosaAzul = 0
    }
  }
  Ffallo(unidad: number) {
    this.fallo = unidad += this.fallo;
    if (this.fallo > 8) {
      this.fallo = 8
    }
    else if (this.fallo < 0) {
      this.fallo = 0
    }
  }
  Farcano(unidad: number) {
    this.arcano = unidad += this.arcano;
    if (this.arcano > 8) {
      this.arcano = 8
    }
    else if (this.arcano < 0) {
      this.arcano = 0
    }
  }
  Fsectario(unidad: number) {
    this.sectario = unidad += this.sectario;
    if (this.sectario > 8) {
      this.sectario = 8
    }
    else if (this.sectario < 0) {
      this.sectario = 0
    }
  }

  generate() {/* 
    let num = Math.floor(Math.random()*100);
    console.log(num); */  /* pito */

    /* 
          setTimeout(() => {
            this.ftubos = 0;
          }, 3000);
     */



    this.resultado = Math.floor(Math.random() *
      (this.sectario + this.fallo + this.arcano + this.calavera + this.cosaAzul + this.masUno + this.cero
        + this.menosUno + this.menosDos + this.menosTres + this.menosCuatro + this.menosCinco + this.menosSeis
        + this.menosSiete + this.menosOcho) + 1);


    console.log(this.resultadoFinal);

    this.resultadoFinal = 48;

    /*  if (this.resultado == 0){
       this.resultado = (this.sectario + this.fallo + this.arcano + this.calavera + this.cosaAzul + this.masUno + this.cero
       + this.menosUno + this.menosDos + this.menosTres + this.menosCuatro + this.menosCinco + this.menosSeis
       + this.menosSiete + this.menosOcho)};
  */

    setTimeout(() => {
      if (this.resultado <= this.sectario) {
        this.resultadoFinal = 1
      }
      else if (this.resultado <= this.sectario + this.fallo) {
        this.resultadoFinal = 2
      }
      else if (this.resultado <= this.sectario + this.fallo + this.arcano) {
        this.resultadoFinal = 3
      }
      else if (this.resultado <= this.sectario + this.fallo + this.arcano + this.calavera) {
        this.resultadoFinal = 4
      }
      else if (this.resultado <= this.sectario + this.fallo + this.arcano + this.calavera + this.cosaAzul) {
        this.resultadoFinal = 5
      }
      else if (this.resultado <= this.sectario + this.fallo + this.arcano + this.calavera + this.cosaAzul + this.masUno) {
        this.resultadoFinal = 6
      }
      else if (this.resultado <= this.sectario + this.fallo + this.arcano + this.calavera + this.cosaAzul + this.masUno + this.cero) {
        this.resultadoFinal = 7
      }
      else if (this.resultado <= this.sectario + this.fallo + this.arcano + this.calavera + this.cosaAzul + this.masUno + this.cero + this.menosUno) {
        this.resultadoFinal = 8
      }
      else if (this.resultado <= this.sectario + this.fallo + this.arcano + this.calavera + this.cosaAzul + this.masUno + this.cero
        + this.menosUno + this.menosDos) {
        this.resultadoFinal = 9
      }
      else if (this.resultado <= this.sectario + this.fallo + this.arcano + this.calavera + this.cosaAzul + this.masUno + this.cero
        + this.menosUno + this.menosDos + this.menosTres) {
        this.resultadoFinal = 10
      }
      else if (this.resultado <= this.sectario + this.fallo + this.arcano + this.calavera + this.cosaAzul + this.masUno + this.cero
        + this.menosUno + this.menosDos + this.menosTres + this.menosCuatro) {
        this.resultadoFinal = 11
      }
      else if (this.resultado <= this.sectario + this.fallo + this.arcano + this.calavera + this.cosaAzul + this.masUno + this.cero
        + this.menosUno + this.menosDos + this.menosTres + this.menosCuatro + this.menosCinco) {
        this.resultadoFinal = 12
      }
      else if (this.resultado <= this.sectario + this.fallo + this.arcano + this.calavera + this.cosaAzul + this.masUno + this.cero
        + this.menosUno + this.menosDos + this.menosTres + this.menosCuatro + this.menosCinco + this.menosSeis) {
        this.resultadoFinal = 13
      }
      else if (this.resultado <= this.sectario + this.fallo + this.arcano + this.calavera + this.cosaAzul + this.masUno + this.cero
        + this.menosUno + this.menosDos + this.menosTres + this.menosCuatro + this.menosCinco + this.menosSeis
        + this.menosSiete) {
        this.resultadoFinal = 14
      }
      else if (this.resultado <= this.sectario + this.fallo + this.arcano + this.calavera + this.cosaAzul + this.masUno + this.cero
        + this.menosUno + this.menosDos + this.menosTres + this.menosCuatro + this.menosCinco + this.menosSeis
        + this.menosSiete + this.menosOcho) {
        this.resultadoFinal = 15
      };
      console.log("Azar " + this.resultado);
      console.log("final " + this.resultadoFinal);
    }, 2000);}
  

    guardar(){ 
      localStorage.setItem('sectario', this.sectario.toString());
      localStorage.setItem('fallo', this.fallo.toString());
      localStorage.setItem('arcano', this.arcano.toString());
      localStorage.setItem('calavera', this.calavera.toString());
      localStorage.setItem('cosaAzul', this.cosaAzul.toString());
      localStorage.setItem('masUno', this.masUno.toString());
      localStorage.setItem('cero', this.cero.toString());
      localStorage.setItem('menosSiete', this.menosSiete.toString());
      localStorage.setItem('menosSeis', this.menosSeis.toString());
      localStorage.setItem('menosCinco', this.menosCinco.toString());
      localStorage.setItem('menosCuatro', this.menosCuatro.toString());
      localStorage.setItem('menosTres', this.menosTres.toString());
      localStorage.setItem('menosDos', this.menosDos.toString());
      localStorage.setItem('menosUno', this.menosUno.toString());
    /* localStorage.setItem; this.sectario */
    };
   
    cargar(){
      this.fallo = Number(localStorage.getItem('fallo'));
      this.sectario = Number(localStorage.getItem('sectario'));
      this.arcano = Number(localStorage.getItem('arcano'));
      this.calavera = Number(localStorage.getItem('calavera'));
      this.cosaAzul = Number(localStorage.getItem('cosaAzul'));
      this.masUno = Number(localStorage.getItem('masUno'));
      this.cero = Number(localStorage.getItem('cero'));
      this.menosSiete = Number(localStorage.getItem('menosSiete'));
      this.menosSeis = Number(localStorage.getItem('menosSeis'));
      this.menosCinco = Number(localStorage.getItem('menosCinco'));
      this.menosCuatro = Number(localStorage.getItem('menosCuatro'));
      this.menosTres = Number(localStorage.getItem('menosTres'));
      this.menosDos = Number(localStorage.getItem('menosDos'));
      this.menosUno = Number(localStorage.getItem('menosUno'));

      /* 
      this.sectario = Number(localStorage.getItem('sectario')) */
      /* localStorage.getItem; this.sectario */
    };
    
}
