import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public _projects : ProjectsService) { }

  ngOnInit() {
  }

}
