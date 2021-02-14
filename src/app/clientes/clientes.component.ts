import { Component, OnInit } from '@angular/core';
import{Cliente} from './cliente';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'

})
export class ClientesComponent implements OnInit {

clientes: Cliente[]=[
  {id:1, nombre:'Andres', apellido:'Moncada', email:'javier@ufps.edu.co', createAt:'2021-20-08' },
  {id:2, nombre:'Javier', apellido:'Moncada', email:'javier@ufps.edu.co', createAt:'2021-20-08' },
  {id:3, nombre:'Camilo', apellido:'Moncada', email:'javier@ufps.edu.co', createAt:'2021-20-08' },
  {id:4, nombre:'Gabriela', apellido:'Moncada', email:'javier@ufps.edu.co', createAt:'2021-20-08' },
  {id:5, nombre:'Pablos', apellido:'Moncada', email:'javier@ufps.edu.co', createAt:'2021-20-08' },
  {id:6, nombre:'Palomino', apellido:'Moncada', email:'javier@ufps.edu.co', createAt:'2021-20-08' },
  {id:7, nombre:'Andres', apellido:'Moncada', email:'javier@ufps.edu.co', createAt:'2021-20-08' },
  {id:8, nombre:'Andres', apellido:'Moncada', email:'javier@ufps.edu.co', createAt:'2021-20-08' },
  {id:9, nombre:'Andres', apellido:'Moncada', email:'javier@ufps.edu.co', createAt:'2021-20-08' },
  {id:10, nombre:'Andres', apellido:'Moncada', email:'javier@ufps.edu.co', createAt:'2021-20-08' }
];
  constructor() { }

  ngOnInit(): void {
  }

}
