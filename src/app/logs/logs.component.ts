import { Component, OnInit } from '@angular/core';
import { Logs } from './../models/heroe.model'
import { HeroService } from '../services/hero.service';
import { ToastrService } from 'ngx-toastr';


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

}
