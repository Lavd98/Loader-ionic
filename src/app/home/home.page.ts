import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  images = [
    {src: 'image1.png', text: 'Cargando'},
    {src: 'image2.png', text: 'Procesando'},
  ];
  showLoader = false;
  constructor(router: Router){

  }
  callApi() { 
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
      // this.router.navigate(['/other-page']); 
    }, 5000);
  }
}
