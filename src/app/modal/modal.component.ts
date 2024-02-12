import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../services/hero.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private heroService: HeroService,
    private toastr: ToastrService,
    private router: Router) {
    this.form = this.formBuilder.group({
      businessId: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      startDate: [''],
      endDate: [''],

      //message: ['', Validators.required]
    });
  }

  submitForm() {
    console.log(this.form.valid);

    if (this.form.valid) {
      console.log('Formulario válido');
      console.log('Valores del formulario:', this.form.value);

      this.heroService.addClient(this.form.value).subscribe(
        data => {
          console.log('marvelService data: ',data);

          if(data.code == 1){
            this.toastr.success(data.message);

          // setTimeout(() => {
          //   this.router.navigate(['/home']);
          //   }, 5000)
          } else {
            this.toastr.error(data.message);
          }


        });
    } else {
      console.log('Formulario inválido');
      this.toastr.info('Formulario inválido');
    }
  }
}
