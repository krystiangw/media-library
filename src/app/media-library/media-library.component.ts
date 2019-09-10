import { Component, Input } from '@angular/core';
import { MediaLibraryItem } from './models/media-library-item';

@Component({
  selector: 'app-media-library',
  templateUrl: './media-library.component.html',
  styleUrls: ['./media-library.component.scss']
})
export class MediaLibraryComponent {
  @Input() items: MediaLibraryItem[];
}
