import { Component, Input } from '@angular/core';
import { PersonIndexCount } from '../../response-data';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent {
  @Input() persons: PersonIndexCount = {};

  getIndexLettersForCounts(): string[] {
    return Object
      .keys(this.persons)
      .sort()
      .filter((key: string) => this.persons[key] > 0);
  }
}
