import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// app-root
import { AppComponent } from './app.component';

import { CoreModule } from './_core/core.module';

// feature modules
import { HomeModule } from './home/home.module';
import { ProfilModule } from './profil/profil.module';
import { OgloszenieModule } from './ogloszenie/ogloszenie.module';
import { KategoriaModule } from './kategoria/kategoria.module';
import { PageNotFoundModule } from './pagenotfound/pagenotfound.module';
import { PanelModule } from './panel/panel.module';
import { AuthModule } from './auth/auth.module';

// routing module
import { RoutingModule } from './_routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
    HttpModule,
    HomeModule,
    ProfilModule,
    OgloszenieModule,
    KategoriaModule,
    PageNotFoundModule,
    CoreModule.forRoot(),
    RoutingModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
