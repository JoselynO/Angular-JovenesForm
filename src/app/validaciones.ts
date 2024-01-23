import { AbstractControl, ValidationErrors } from "@angular/forms";

export class Validaciones {

    static validarDNI(control: AbstractControl) : ValidationErrors | null{
      if(control.value.length == 9){
        let dni: string = control.value;
        let numero = Number(dni.substring(0,8));
        let letra = dni.substring(8,9);
        let posicion = numero % 23;
        let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B","N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"]
        let letraCorrecta = letras[posicion];

        if(letra.toUpperCase() == letraCorrecta){
          return null;
        } else {
          return {validarDNI : true}
        }
      } else {
        return null;
      }
    }

    static validarImagen(control: AbstractControl) : ValidationErrors | null{
        if(control.value){
        const imagen : string = control.value;
        const extensionesValidas : string [] = [".jpg", ".png", ".gif", ".pdf", ".jpeg"];
        let acierto : string[] = extensionesValidas.filter(ext => imagen.endsWith(ext));
        if(acierto.length > 0){
            return null;
        } else {
            return {validarImagen: true}
        }
        }else{
            return null;
        }
    }
    
    static validarFecha(control: AbstractControl) : ValidationErrors | null{
        if(control.value){
            const fechaUsuario : string = control.value;
            const fecha = new Date();
            const campos = fechaUsuario.split("/");
            fecha.setDate(Number(campos[0]));
            fecha.setMonth(Number(campos[1])-1);
            fecha.setFullYear(Number(campos[2]));
            console.log(fecha);
            if(!isNaN(fecha.getTime()) && Number(campos[0]) == fecha.getDate() && Number(campos[1]) == fecha.getMonth() + 1 && Number(campos[2]) == fecha.getFullYear()){
                return null;
            }else{
                return {validarFecha: true};
            }
        } else{
            return null;
        }
    }

}