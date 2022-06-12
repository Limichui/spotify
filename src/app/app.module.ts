import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({ //TODO: Declaraciones, componentes, directivas, pipes
  declarations: [
    AppComponent //TODO: Declaraciones, componentes, directivas, pipes

  ],
  imports: [ //TODO: Solo se importan otros modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
