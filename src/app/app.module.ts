import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/*import {HttpClientModule} from '@angular/common/http';*/

import { AppComponent } from './app.component';
import { AuthorizationPageComponent } from './components/authorization-page/authorization-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { FeedPageComponent } from './components/feed-page/feed-page.component';
import { IdeaCardComponent } from './components/idea-card/idea-card.component';
import { IdeaPageComponent } from './components/idea-page/idea-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UserPageComponent } from './components/user-page/user-page.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationPageComponent,
    RegistrationPageComponent,
    IdeaCardComponent,
    IdeaPageComponent,
    FeedPageComponent,
    NavBarComponent,
    UserPageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    /*HttpClientModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
