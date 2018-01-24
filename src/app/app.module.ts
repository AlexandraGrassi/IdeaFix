import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/*import {HttpClientModule} from '@angular/common/http';*/

import { AppComponent } from './app.component';
import { IdeaCardComponent } from './components/idea-card/idea-card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { IdeaPageComponent } from './components/idea-page/idea-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IdeaCardComponent,
    NavBarComponent,
    HomePageComponent,
    IdeaPageComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    /*HttpClientModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
