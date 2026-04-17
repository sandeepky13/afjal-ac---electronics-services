export type Service = {
  id: string;
  name: string;
  description: string;
  icon: string;
  price?: string;
};

export type Review = {
  id: string;
  name: string;
  content: string;
  rating: number;
  date: string;
};

export type GalleryImage = {
  id: string;
  url: string;
  title: string;
};

export type Video = {
  id: string;
  youtubeId: string;
  title: string;
};
