import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MediaLibraryComponent } from '@app/media-library/media-library.component';

@NgModule({
  declarations: [
    MediaLibraryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    MediaLibraryComponent
  ]
})
export class MediaLibraryModule { }
