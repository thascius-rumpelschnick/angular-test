import { Component } from '@angular/core';
import { ResponseService } from '../response.service';

@Component({
  selector: 'app-home',
  template: `
    <app-states [states]="responseService.getStateList()"></app-states>
    <app-persons [persons]="responseService.getPersonIndexCounts()"></app-persons>
  `,
  providers: [ResponseService]
})
export class StatesComponent {
  constructor(readonly responseService: ResponseService) { }
}
