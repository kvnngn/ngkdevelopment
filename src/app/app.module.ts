import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LastFmScrobblesModule } from 'angular-last-fm-scrobbles';

import { OverlayModule } from '@angular/cdk/overlay';
import { IconsModule } from './icons.module';
import { ProjectCardComponent } from './elements/project-card/project-card.component';
import {HomeComponent} from "./pages/home/home.component";
import {NavbarComponent} from "./elements/navbar/navbar.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {FooterComponent} from "./elements/footer/footer.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {PlexComponent} from "./pages/plex/plex.component";
import {CryptoDialogComponent} from "./elements/dialogs/crypto-dialog/crypto-dialog.component";
import {RoutesModule} from "./routes.module";
import {ThemeService} from "./services/theme/theme.service";




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    PlexComponent,
    CryptoDialogComponent,
    ProjectCardComponent,
  ],
  entryComponents: [CryptoDialogComponent],
  imports: [
    FontAwesomeModule,
    IconsModule,
    RoutesModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatDividerModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,
    OverlayModule,
    LastFmScrobblesModule,
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
