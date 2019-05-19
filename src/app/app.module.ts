import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
