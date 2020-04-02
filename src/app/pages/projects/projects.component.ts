import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ThemeService } from '../../services/theme/theme.service';

export interface Project {
  logo  : string,
  darkLogo? : string
  title : string,
  description : string,
  logoOnly : boolean,
  categories : Category[],
  actions : Action[],
}

export interface Category {
  icon : String[], //['fab','android']
  title : string
}

export interface Action {
  link : string;
  title : string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects : Project[];

  constructor(private titleServ : Title, public theme : ThemeService) {
    this.titleServ.setTitle('Nguyen Kévin - Projects');
  }

  ngOnInit() {
    this.setProjects();
  }

  setProjects() {
    this.projects = [
      {
        title : 'GPharma',
        logo : './assets/img/resume/pharmacy.png',
        darkLogo : './assets/img/resume/pharmacy.png',
        logoOnly : true,
        description : `Provided SSR Progressive Web App (Angular 8) in order to manage pharmacie deliveries (drugs and medical kits) using a customized API (NodeJS/AWS/MongoDB).
        The mobile app intended for couriers, make it possible to do an optimization of multiple itineraries using Microsoft Maps API.`,
        categories : [
          {
            icon : ['fab','angular'],
            title : 'Angular'
          },
          {
            icon : ['fas','code'],
            title : 'TypeScript'
          },
          {
            icon : ['fas','database'],
            title : 'MongoDB'
          },
          {
            icon : ['fas','code'],
            title : 'Amazon Web Services'
          },
          {
            icon : ['fab','html5'],
            title : 'HTML'
          },
          {
            icon : ['fab','css3-alt'],
            title : 'CSS'
          },
        ],
        actions : [
          {
            link : 'https://gpharma.fr',
            title : 'Website'
          }
        ]
      }
    ]
  }

}
