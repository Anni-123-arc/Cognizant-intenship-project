import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Carousal } from './shared/components/carousal/carousal';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,RouterModule,Carousal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'Ecommerce';
}
