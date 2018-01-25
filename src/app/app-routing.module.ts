import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorizationPageComponent} from './components/authorization-page/authorization-page.component';
import {RegistrationPageComponent} from './components/registration-page/registration-page.component';
import {FeedPageComponent} from './components/feed-page/feed-page.component';

// TODO: We must create and deploy 'not-found' page.
const appRoutes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'auth', component: AuthorizationPageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'feed', component: FeedPageComponent},
];

@NgModule ({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
