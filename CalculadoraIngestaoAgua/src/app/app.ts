import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculoagua } from './calculoagua/calculoagua';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Calculoagua],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CalculadoraIngestaoAgua');
}
