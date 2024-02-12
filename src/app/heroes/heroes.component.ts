import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Hero } from './../models/heroe.model'
import { HeroService } from '../services/hero.service';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  superheroes:Hero[] = [];
  search = '';

  pageIndex = 0;
  pageSize = 3;
  totalRecords: number = 1562;


  constructor(
    private heroService: HeroService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.heroService.get().subscribe(
      data => {
        console.log('marvelService data: ',data);
        this.superheroes = data;
      });

  }

  openModal(){
    console.log('open modal');
  }



}
