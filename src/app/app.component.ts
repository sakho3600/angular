import { Component, ViewChild } from '@angular/core';
import {Hero} from './hero';
import {HeroListComponent} from './hero-list/hero-list.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';

@Component({ 
  selector: 'app-root',
  templateUrl: 'app.component.html',   
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  selectHero : Hero;

  selectHeroChange(event) {
    this.selectHero = event;
  }

}