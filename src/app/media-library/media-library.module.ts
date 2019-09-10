import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MediaLibraryComponent } from '@app/media-library/media-library.component';
import { SearchFilterComponent, TypeFilterComponent, SortSelectComponent } from '@app/media-library/components';

@NgModule({
  declarations: [
    MediaLibraryComponent,
    SearchFilterComponent,
    TypeFilterComponent,
    SortSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports: [
    MediaLibraryComponent
  ]
})
export class MediaLibraryModule { }
