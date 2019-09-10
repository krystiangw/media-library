import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MediaLibraryModule} from '@app/media-library/media-library.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MediaLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
