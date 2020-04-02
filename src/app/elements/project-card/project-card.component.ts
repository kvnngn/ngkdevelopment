import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {Project} from "../../pages/projects/projects.component";
import {AppComponent} from "../../app.component";
import {ThemeService} from "../../services/theme/theme.service";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
   @Input('project') project : Project;

  constructor(public router : Router, public app : AppComponent, public theme : ThemeService) { }

  ngOnInit() {
  }

  getLogoSource() {
      if (this.theme.isLight() || !this.project.darkLogo) return this.project.logo;
      return this.project.darkLogo;
  }

}
