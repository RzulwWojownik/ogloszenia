import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../home/home.component';
import { ProfilComponent } from '../profil/profil.component';
import { OgloszenieComponent } from '../ogloszenie/ogloszenie.component';
import { KategoriaComponent } from '../kategoria/kategoria.component';
import { PageNotFoundComponent } from '../pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'ogloszenie/:id', component: OgloszenieComponent },
  {
    path: 'kategoria/:id',
    component: KategoriaComponent,
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }