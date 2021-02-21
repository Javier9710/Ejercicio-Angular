import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import swal from 'sweetalert2';
import {tap} from 'rxjs/operators';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'

})
export class ClientesComponent implements OnInit {

clientes: Cliente[];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().pipe(
        tap(clientes => {
          console.log('ClientesComponent: tap 3');
          clientes.forEach(
            cliente =>{
              console.log(cliente.nombre);
            });
        })
    ).subscribe(clientes => this.clientes = clientes);
  }

  delete(cliente: Cliente): void{
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Estas Seguro?',
      text: `Esta seguro de Eliminar al Cliente ${cliente.nombre} ${cliente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'No, Cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(cliente.id).subscribe(
          response=>{
            this.clientes = this.clientes.filter(cli => cli !==cliente)
            swalWithBootstrapButtons.fire(
              'Cliente Eliminado!',
              'El cliente se ha eliminado con exito',
              'success'
            )

          }
        )






  }

})
}
}
