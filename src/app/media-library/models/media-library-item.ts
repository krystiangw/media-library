import { MediaLibraryType } from './';

export interface MediaLibraryItem {
  id: number;
  name: string;
  type: MediaLibraryType;
  uploadedAt: number;
}
