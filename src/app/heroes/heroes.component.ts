import { Component, OnInit,TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EditheroComponent } from '../edithero/edithero.component';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  modalRef: BsModalRef;
  editeddata : any
  constructor(private heroService: HeroService, private dialog : MatDialog,private router : Router) { }

  ngOnInit() {
    
    setInterval(() =>{
      this.getHeroes(); }, 1000);
  }

//   openModal(template: TemplateRef<any>) {
//     this.modalRef = this.modalService.show(template);
//  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(hero => 
      this.heroes = hero
    );
  }

  

  add(name: string,rating : number): void {
   
  if(rating <=10){
    if (!name) { return; }
    this.heroService.addHero({ name , rating} as Hero)
      .subscribe(hero => {
        console.log(hero)
      });
  }else {
    alert('rating should be less than 11')
  }
  }

  delete(hero): void {
    this.heroService.deleteHero(hero._id).subscribe((result)=>{
      console.log(result)
    });
  }
  gotodetail(hero){
    var id = hero._id
    this.router.navigate(['/detail/',id])
  }

  edit(hero : Hero){
    this.editeddata = hero
    // this.dialog.open(EditheroComponent,{
    //   height:'500px',
    //   width:'500px',
    //   data:hero
    // })
    
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

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/