import { Component } from '@angular/core';

@Component({
  selector: 'app-direcctiva',
  templateUrl: './direcctiva.component.html',

})
export class DirecctivaComponent {

  listaCurso: string[] = ['TypeScript', 'JavaScript', 'Java', 'C#', 'PHP'];
  habilitar: boolean = true;

  constructor() { }

  setHabilitar():void{
  this.habilitar=(this.habilitar==true)? false : true;
}

}
