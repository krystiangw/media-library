export type MediaLibraryType = 'Video' | 'Interactive Video' | 'Audio' | 'Image' | 'Document';

export const mediaLibraryTypeList: { name: string, type: MediaLibraryType }[] = [
  {
    name: 'Videos',
    type: 'Video'
  },
  {
    name: 'Interactive Videos',
    type: 'Interactive Video'
  },
  {
    name: 'Audio',
    type: 'Audio'
  },
  {
    name: 'Images',
    type: 'Image'
  },
  {
    name: 'Documents',
    type: 'Document'
  }
];

export const mediaLibraryTypes: MediaLibraryType[] = mediaLibraryTypeList.map(({ type}) => type);
