import { Component,} from '@angular/core'; /* numberAttribute  */
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculoagua',
  imports: [FormsModule,CommonModule],
  templateUrl: './calculoagua.html',
  styleUrl: './calculoagua.css',
})
export class Calculoagua {
  //variaveis
  peso: number = 0;
  nivelAtividade: number = 0;
  aguaMl: number = 0;
  garrafas: number = 0;
  resultado: String = '';
  aviso: String = '';

  calcularIngestao() {
    if (this.peso > 0 && this.nivelAtividade > 0){
      this.aguaMl = (this.peso * 35) * this.nivelAtividade
      this.garrafas = Math.ceil(this.aguaMl/500)
      this.resultado = `Meta diária: ${this.garrafas} garrafas de 500ml, Total ${(this.aguaMl/1000).toFixed(1)} litros.`
      this.aviso = "Use garrafas reutilizáveis e ajude o planeta 🌱"
    }
    else{
      this.resultado = "Valor invalido"
      console.log("Valor invalido")
    }
  }
}
