import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Client } from './../models/heroe.model'
import { HeroService } from '../services/hero.service';
import * as XLSX from "xlsx";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  client:Client[] = [];
  fileName = 'Clients.xlsx';
  form: FormGroup;


  constructor(
    private heroService: HeroService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.formBuilder.group({
      sharedKey: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.heroService.get().subscribe(
      data => {
        console.log('marvelService data: ',data);
        if(data.code == 1){
          this.toastr.success(data.message);
          this.client = data.data;
        // setTimeout(() => {
        //   this.router.navigate(['/home']);
        //   }, 5000)
        } else {
          this.toastr.error(data.message);
        }
      });

  }

  submitForm() {
    if (this.form.valid) {
      console.log('Formulario válido');
      console.log('Valores del formulario:', this.form.value);

      this.heroService.search(this.form.value).subscribe(
        data => {
          if(data.code == 1){
            this.toastr.success(data.message);
            this.client = data.data;
          // setTimeout(() => {
          //   this.router.navigate(['/home']);
          //   }, 5000)
          } else {
            this.toastr.error(data.message);
          }
        });
    } else {
      console.log('Formulario inválido');
    }
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
