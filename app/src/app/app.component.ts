import { Component } from '@angular/core';
import { response, ResponseData } from './response-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  response: ResponseData = response;
}
