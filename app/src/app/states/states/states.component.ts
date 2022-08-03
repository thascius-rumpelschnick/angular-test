import { Component, Input } from '@angular/core';
import { State } from '../../response-data';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent {
  @Input() states: State[] = [];

  getSortedStates(): State[] {
    return this.states.sort(
      (a: State, b: State) => a.name.localeCompare(b.name, 'de')
    );
  }

  getSchoolsWording(count: number): string {
    return count === 1
      ? `${count} Schule`
      : `${count} Schulen`;
  }
}
