import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  
  @Input() config: any;

  images: Array<{ src: string; text: string }> = [];
  currentIndex = 0;

  constructor(private loadingController: LoadingController) {}

  ngOnInit(): void {
    this.images = this.config.images.map((image) => ({
      ...image,
      src: `assets/img/${image.src}`,
    }));
    this.startLoader();
  }

  startLoader() {
    const interval = setInterval(() => {
      this.currentIndex++;
      if (this.currentIndex === this.images.length) {
        clearInterval(interval);
        setTimeout(() => {
          console.log('Redireccionando...');
          window.location.href = 'https://www.google.com'; 
        }, 2000);
      }
    }, this.config.interval || 3000); 
  }

}
