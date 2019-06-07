import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    LinhaDoTempoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
