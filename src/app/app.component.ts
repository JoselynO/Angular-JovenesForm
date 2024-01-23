import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Validaciones } from './validaciones';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  datos!: string;
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  dniRegex = /^\d{8}[a-zA-Z]$/;
  fechaRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  cpRegex = /^(5[0-2]|[1-4][0-9]|0[1-9])[0-9]{3}$/
  situacionActual: {nombre: string}[] = [{nombre: 'Seleccione'},{nombre: 'Estudiante'},{nombre: 'Paro'},{nombre: 'Trabajando'}]
  hobbies: {nombre: string}[] = [
    {nombre: 'Musica'},
    {nombre: 'Arte'},
    {nombre: 'Cocina'},
    {nombre: 'Literatura'}
  ]

  provinciasArray = [{ nombre: '' },{ nombre: 'Álava' },{ nombre: 'Albacete' },{ nombre: 'Alicante' },{ nombre: 'Almería' },{ nombre: 'Ávila' },{ nombre: 'Badajoz' },{ nombre: 'Baleares' },{ nombre: 'Barcelona' },{ nombre: 'Burgos' },{ nombre: 'Cáceres' },{ nombre: 'Cádiz' },{ nombre: 'Castellón' },{ nombre: 'Ciudad Real' },{ nombre: 'Córdoba' },{ nombre: 'La Coruña' },{ nombre: 'Cuenca' },{ nombre: 'Gerona' },{ nombre: 'Granada' },{ nombre: 'Guadalajara' },{ nombre: 'Guipúzcoa' },{ nombre: 'Huelva' },{ nombre: 'Huesca' },{ nombre: 'Jaén' },{ nombre: 'León' },{ nombre: 'Lérida' },{ nombre: 'La Rioja' },{ nombre: 'Lugo' },{ nombre: 'Madrid' },{ nombre: 'Málaga' },{ nombre: 'Murcia' },{ nombre: 'Navarra' },{ nombre: 'Orense' },{ nombre: 'Asturias' },{ nombre: 'Palencia' },{ nombre: 'Las Palmas' },{ nombre: 'Pontevedra' },{ nombre: 'Salamanca' },{ nombre: 'Santa Cruz de Tenerife' },{ nombre: 'Cantabria' },{ nombre: 'Segovia' },{ nombre: 'Sevilla' },{ nombre: 'Soria' },{ nombre: 'Tarragona' },{ nombre: 'Teruel' },{ nombre: 'Toledo' },{ nombre: 'Valencia' },{ nombre: 'Valladolid' },{ nombre: 'Vizcaya' },{ nombre: 'Zamora' },{ nombre: 'Zaragoza' },{ nombre: 'Ceuta' },{ nombre: 'Melilla' }]

  provincia?: string;
  
  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    apellido: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    fechaDeNacimiento: new FormControl('',[Validators.required, Validators.pattern(this.fechaRegex), Validaciones.validarFecha]),
    dni: new FormControl('',[Validators.required, Validators.pattern(this.dniRegex), Validaciones.validarDNI]),
    email: new FormControl('',[Validators.required, Validators.pattern(this.emailRegex)]),
    base: new FormControl('',[Validators.required]),
    imagen: new FormControl('',[Validators.required, Validaciones.validarImagen]),
    intereses: new FormControl('',[Validators.required]),
    codigop: new FormControl('',[Validators.required, Validators.pattern(this.cpRegex)]),
    situacion: new FormControl('Seleccione',[ Validators.pattern(/(Estudiante|Paro|Trabajando)/)]),
    aceptarC: new FormControl('',[Validators.requiredTrue])
  });
  

  get f(){
    return this.formularioContacto.controls;
  }

  modificarProvincia(){
    if(this.formularioContacto.value.codigop?.length == 5){
      let posicion: number = Number(this.formularioContacto.value.codigop.substring(0,2));
      this.provincia = this.provinciasArray[posicion].nombre || "El CP es invalido";
    } else {
      this.provincia = "El CP es invalido"
    }
  }
 

  submit(){
    if(this.formularioContacto.valid){
      alert("Los datos son validos.")
    } else {
      alert("Invalido, verificar datos.")
    }
  }

  limpiarControles() {
    this.formularioContacto.get('nombre')?.setValue('');
    this.formularioContacto.get('apellido')?.setValue('');
    this.formularioContacto.get('fechaDeNacimiento')?.setValue('');
    this.formularioContacto.get('dni')?.setValue('');
    this.formularioContacto.get('email')?.setValue('');
    this.formularioContacto.get('base')?.setValue('');
    this.formularioContacto.get('imagen')?.setValue('');
    this.formularioContacto.get('intereses')?.setValue('');
    this.formularioContacto.get('codigop')?.setValue('');
    this.formularioContacto.get('situacion')?.setValue('');
    this.formularioContacto.get('aceptarC')?.setValue('');
    this.provincia = "";
  }


}
