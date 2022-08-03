import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseService } from '../response.service';
import { State } from '../response-data';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss'],
  providers: [ResponseService]
})
export class StateComponent implements OnInit {
  state: State | null = null;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    readonly responseService: ResponseService,
  ) { }

  ngOnInit(): void {
    this.route.url.subscribe(urlSegment => {
      const path = urlSegment[1].path;
      const result = this.responseService
        .getStateList()
        .filter(state => state.url.endsWith(path)).shift();

      if (result !== undefined) {
        this.state = result;
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
