import { Component } from '@angular/core';
import { LoaderConfig } from './models/loader-config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  loaderActive = false;
  loaderConfig: LoaderConfig = {
    images: [
      { src: 'fondo.jpg', text: 'Texto 1' },
      { src: 'membrete.png', text: 'Texto 2' },
    ],
    interval: 2000, 
  };

  startLoader() {
    this.loaderActive = true;
  }
}
