import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private heroService: HeroService, private router: Router) {
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
    if (this.form.valid) {
      console.log('Formulario válido');
      console.log('Valores del formulario:', this.form.value);

      this.heroService.addClient(this.form.value).subscribe(
        data => {
          console.log('marvelService data: ',data);
          this.router.navigate(['/home']);
          //this.superheroes = data;
        });
    } else {
      console.log('Formulario inválido');
    }
  }
}
