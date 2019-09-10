export type MediaLibraryType = 'Video' | 'Interactive Video' | 'Audio' | 'Image' | 'Document';

export const mediaLibraryTypeList: { name: string, type: MediaLibraryType, extension: string }[] = [
  {
    name: 'Videos',
    type: 'Video',
    extension: 'avi'
  },
  {
    name: 'Audio',
    type: 'Audio',
    extension: 'mp3'
  },
  {
    name: 'Images',
    type: 'Image',
    extension: 'jpg'
  },
  {
    name: 'Documents',
    type: 'Document',
    extension: 'pdf'
  }
];

export const mediaLibraryTypes: MediaLibraryType[] = mediaLibraryTypeList.map(({ type}) => type);
