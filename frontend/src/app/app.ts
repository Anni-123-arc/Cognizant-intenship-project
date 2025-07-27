import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
// import { Carousal } from './shared/components/carousal/carousal';
// import { NavBar } from './shared/components/nav-bar/nav-bar';
// import { FeatureProductList } from './shared/components/feature-product-list/feature-product-list';
// import { Footer } from './shared/components/footer/footer';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'Ecommerce';
}
