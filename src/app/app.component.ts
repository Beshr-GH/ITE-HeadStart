import { Component } from '@angular/core';
import {HomeComponent} from './home/index';
import { ProListComponent} from './pro-list/index';
import { SignComponent} from './sign/index';
import { ProjectDetailsComponent} from './project-details/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  //directives : [HomeComponent]
})
export class AppComponent {
  title = 'app work ! , woop ,woop.';
  name='marah najjar';
  person={
f:"marah",
l: "naj"
  };
}
