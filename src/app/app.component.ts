import { Component } from '@angular/core';
import { Validators, FormBuilder } from "@angular/forms";
import { BusquedaJuegosService } from "../app/services/busqueda-juegos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'freetogame';
  busquedaForm = this.fb.group({
    categoria: ['', [
        Validators.required,
        Validators.minLength(2)
      ]
    ]
  });
  juegos: any = [];
  sinRespuesta: boolean = false;
  carga: boolean = false;
  constructor(
    private fb: FormBuilder,
    private busquedaJuegosService: BusquedaJuegosService
    ){}

  onSubmit() {
    this.juegos = [];
    this.sinRespuesta = false;
    this.carga = true;
    this.busquedaJuegosService.obtenerCategoria(this.busquedaForm.get('categoria')!.value).subscribe({
      next: this.handleSuccess.bind(this),
      error: this.handleError.bind(this)
    })
  }

  handleSuccess(data: any){
    this.carga = false;
    this.juegos = data;
  }

  handleError(err: any){
    this.carga = false;
    this.sinRespuesta = true;
  }


}
