import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { TripsComponent } from './components/trips/trips';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'trips', component: TripsComponent }
];