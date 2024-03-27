import { Component } from '@angular/core';
import { Students } from './models/students.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clase-4-no-standalone';

  usuarios: Students [] = [
    new Students(
      1,
      'Amalia',
      'Alegre',
      true
    ),
    new Students(
      2,
      'Juan',
      'Clemente',
      false
    ),
    new Students(
      3,
      'Nicole ',
      'Hidalgo',
      true
    ),
    new Students(
      4,
      'Adolfo',
      'Bilbao',
      false
    ),
    new Students(
      5,
      'Hipolito',
      'Llamas',
      false
    ),
    new Students(
      6,
      'Elisabeth',
      'Serrano',
      true
    ),
  ];



  hasError=false;

  students=['Agustin','Nicolas','Matias','Jose','Camila','Catalina','Julieta'];

  mostrarListado = false;

  status :'en-camino' | 'entregado' | 'en-preparacion' = 'en-preparacion';

  myBirthday = new Date (1994, 8, 94);


  alternarError() {
    this.hasError = !this.hasError;
  }

  onSelectChange(ev:Event) {
    console.log(ev)
    const elemento = ev.target as HTMLSelectElement;
    const valor = elemento.value as 'en-camino' | 'entregado' | 'en-preparacion';
    this.status = valor;
  }
}



















// import { Component, OnInit } from '@angular/core';
// import { Usuario } from './models/students.models';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss',
// })
// export class AppComponent implements OnInit {
//   ngOnInit(): void {
//     // ok
//   }

//   title = 'afterclass-01-typescript';

//   esValido: boolean = true;
//   nombre = 'Jorge';
//   edad = 20;
//   frutas: string[] = ['Manzana', 'Naranja', 'Frutilla'];
//   array1: (number | string | boolean)[] = [20, 40, 'Argentina', false];
//   // array1: [number, number, string, boolean, number] = [20, 40, 'Argentina', false, 50];
//   array2: (number | string[] | boolean)[] = [
//     40,
//     ['Jupiter', 'Saturno', 'Urano'],
//     true,
//   ];

//   usuarios: Usuario[] = [
//     new Usuario(
//       1,
//       'michael.lawson@reqres.in',
//       'Michael',
//       'Lawson',
//       'https://reqres.in/img/faces/7-image.jpg',
//       true
//     ),
//     new Usuario(
//       2,
//       'michael.lawson@reqres.in',
//       'Michael',
//       'Lawson',
//       'https://reqres.in/img/faces/7-image.jpg',
//       false
//     ),
//     new Usuario(
//       3,
//       'michael.lawson@reqres.in',
//       'Michael',
//       'Lawson',
//       'https://reqres.in/img/faces/7-image.jpg',
//       true
//     ),
//   ];
// }






























































