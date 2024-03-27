export interface ObtenerUsuariosReponse {
    data: IUsuario;
  }
  
  export interface IUsuario {
    id: number;
    nombre: string;
    apellido: string;
  }
   
  export class Students implements IUsuario {
    constructor(
      public id: number,
      public nombre: string,
      public apellido: string,
      public aprobado: boolean
    ) {}
    
    alternarAprobado(): void {
      this.aprobado = !this.aprobado;
    }
  }
  

















  // function obtenerUsuario (uid: number) {

  //   const respuesta: ObtenerUsuariosReponse = {
  //     data: {
  //       id: 7,
  //       nombre: 'Michael',
  //       apellido: 'Lawson',
  //     },
  //     support: {
  //       url: 'https://reqres.in/#support-heading',
  //       text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
  //     },
  //   };
  
  //   const { id, nombre, apellido } = respuesta.data;
  
  //   const usuario = new Usuario(id, nombre, apellido, true);
  
  //   usuario.editarEmail();
  //   usuario.iniciarSesion();
  // }






// export interface ObtenerUsuariosReponse {
//     data: IUsuario;
//     support: Support;
// }

// export interface IUsuario {
//     id: number;
//     nombre: string;
//     apellido: string;
// }

// export interface Support {
//     url: string;
//     text: string;
// }

// export class Usuario implements IUsuario {
//     constructor(
//     public id: number,
//     public nombre: string,
//     public apellido: string,
//     ) {}
// };

// function obtenerUsuario(id:number){
//     const respuesta: ObtenerUsuariosReponse = {
//         data: {
//             id: 7,
//             nombre: 'Agustín',
//             apellido: 'Saborido',
//         },
//     };

//     console.log(respuesta.data.nombre);
// }























































