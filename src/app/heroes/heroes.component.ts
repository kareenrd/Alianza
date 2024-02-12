import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Hero } from './../models/heroe.model'
import { HeroService } from '../services/hero.service';
import * as XLSX from "xlsx";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  superheroes:Hero[] = [];
  fileName = 'Clients.xlsx';


  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit() {
    this.heroService.get().subscribe(
      data => {
        console.log('marvelService data: ',data);
        this.superheroes = data;
      });

  }

  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('clients');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }


}
