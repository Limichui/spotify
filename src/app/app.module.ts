import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesComponent } from './modules/favorites/favorites.component';

@NgModule({ //TODO: Declaraciones, componentes, directivas, pipes
  declarations: [
    AppComponent,
    FavoritesComponent,

  ],
  imports: [ //TODO: Solo se importan otros modulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
