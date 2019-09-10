export type MediaLibraryType = 'video' | 'interactiveVide' | 'audio' | 'image' | 'document';

export const mediaLibraryTypeList: { name: string, type: MediaLibraryType }[] = [
  {
    name: 'Video',
    type: 'video'
  },
  {
    name: 'Interactive Video',
    type: 'interactiveVide'
  },
  {
    name: 'audio',
    type: 'audio'
  },
  {
    name: 'Image',
    type: 'image'
  },
  {
    name: 'Document',
    type: 'document'
  }
];

export const mediaLibraryTypes: MediaLibraryType[] = mediaLibraryTypeList.map(({ type}) => type);
