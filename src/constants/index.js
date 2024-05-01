import { getAssetUrl } from '@/lib/utils';

export const MenuItems = [
  {
    id: 1,
    path: '#home',
    title: 'Home'
  },
  {
    id: 2,
    path: '#events',
    title: 'Events'
  },
  {
    id: 3,
    path: '#about',
    title: 'About'
  }
];

export const PembelajaranItems = [
  {
    id: 1,
    src: getAssetUrl('/pembelajaran1.svg'),
    alt: 'Pembelajaran 1'
  },
  {
    id: 2,
    src: getAssetUrl('/pembelajaran2.svg'),
    alt: 'Pembelajaran 2'
  },
  {
    id: 3,
    src: getAssetUrl('/pembelajaran3.svg'),
    alt: 'Pembelajaran 3'
  }
];

export const KegiatanItems = [
  {
    id: 1,
    src: getAssetUrl('/kegiatan1.svg'),
    alt: 'Kegiatan 1'
  },
  {
    id: 2,
    src: getAssetUrl('/kegiatan2.svg'),
    alt: 'Kegiatan 2'
  },
  {
    id: 3,
    src: getAssetUrl('/kegiatan3.svg'),
    alt: 'Kegiatan 3'
  }
];

export const BatchItems = [
  {
    id: 1,
    src: getAssetUrl('/batchApollo.svg'),
    alt: 'Batch Apollo'
  },
  {
    id: 2,
    src: getAssetUrl('/batchVoyager.svg'),
    alt: 'Batch Voyager'
  },
  {
    id: 3,
    src: getAssetUrl('/batchRover.svg'),
    alt: 'Batch Rover'
  }
];
