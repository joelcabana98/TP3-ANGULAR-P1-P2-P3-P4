import { Component } from '@angular/core';
import {PipePersonalizadoPipe} from '../app/pipes/pipe-personalizado.pipe';
import {BooleanStringPipe} from '../app/pipes/boolean-string.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProyect';
}
