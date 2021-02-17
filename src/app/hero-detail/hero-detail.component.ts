import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
id
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  submitedit(id,name,rating){
    if(rating <= 10){
      const heros = {
        name : name,
        rating:rating
      }
      console.log(heros)
      this.heroService.updateHero(id,heros).subscribe((result)=>{
        if(result.message == "success"){
          window.location.reload()
        }
        
      })
    } else {
      alert('rating should be less than 11')
    }
    
  }
  getHero(): void {
     this.route.params.subscribe((data)=>{
       this.id = data.id
 
      this.heroService.getHero(this.id)
      .subscribe(hero => this.hero = hero.data);
    })
   
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero,1)
      .subscribe(() => this.goBack());
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/