import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArkhamLCG';

  // mapa: ficha -> contador
  mapa_fichas_cantidad = new Map<string, number>([
    [ 'mas1', 0 ],
    [ 'cero', 0 ],
    [ 'menos1', 0 ],
    [ 'menos2', 0 ],
    [ 'menos3', 0 ],
    [ 'menos4', 0 ],
    [ 'menos5', 0 ],
    [ 'menos6', 0 ],
    [ 'menos7', 0 ],
    [ 'menos8', 0 ],
    [ 'calavera', 0 ],
    [ 'sectario', 0 ],
    [ 'cosaAzul', 0 ],
    [ 'fallo', 0 ],
    [ 'arcano', 0 ],
  ]);

  resultado: string = '';

  ngOnInit() { // https://angular.io/api/core/OnInit
    this.cargar_fichas();
  }

  actualizar_fichas(ficha: string, cantidad: number) {
    if ( !this.mapa_fichas_cantidad.has(ficha) ) {
      console.error("No existe la ficha " + ficha);
      return;
    }

    const cantidad_antigua: any = this.mapa_fichas_cantidad.get(ficha);
    const cantidad_nueva: number = cantidad_antigua + cantidad;

    if (cantidad_nueva >= 0) {
      this.mapa_fichas_cantidad.set(ficha, cantidad_nueva);
    }
  }

  generar_ficha_aleatoria() {
    let posibles_fichas: string[] = [];

    // Generamos una lista con todas las fichas posibles
    for (let [ficha, cantidad] of this.mapa_fichas_cantidad ) {
      for (let contador = 0; contador < cantidad; contador++) {
        posibles_fichas.push(ficha);
      }
    }

    // Elegimos un numero al azar entre las fichas
    const indice_aleatorio: number = Math.floor(Math.random() * (posibles_fichas.length - 1));

    setTimeout(() => {
      this.resultado = posibles_fichas[indice_aleatorio];
    }, 1000);
  }

  guardar_fichas(){
    for (let [ficha, cantidad] of this.mapa_fichas_cantidad ) {
      localStorage.setItem(ficha, cantidad.toString());
    };
  };

  cargar_fichas(){
    for (let ficha of this.mapa_fichas_cantidad.keys() ) {
      const cantidad: number = Number(localStorage.getItem(ficha));
      this.mapa_fichas_cantidad.set(ficha, cantidad);
    };
  };

}
