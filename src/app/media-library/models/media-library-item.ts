export type MediaLibraryType = 'video' |  'interactiveVide' | 'audio' | 'image' | 'document';

export interface MediaLibraryItem {
  id: number;
  name: string;
  type: MediaLibraryType;
  uploadedAt: number;
}
