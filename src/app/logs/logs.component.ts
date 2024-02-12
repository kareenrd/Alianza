import { Component, OnInit } from '@angular/core';
import { Logs } from './../models/heroe.model'
import { HeroService } from '../services/hero.service';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from "xlsx";


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit  {

  logs:Logs[] = [];
  fileName = 'Clients.xlsx';

  constructor(
    private heroService: HeroService,
    private toastr: ToastrService
  ) {

  }

  ngOnInit() {
    this.heroService.getLogs().subscribe(
      data => {
        console.log('marvelService data: ',data);
        this.logs = data;
      });

  }
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('logs');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

}
