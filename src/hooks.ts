import { useState, useEffect } from 'react';
import { Review, GalleryImage, Video } from './types';
import { INITIAL_REVIEWS, INITIAL_GALLERY, INITIAL_VIDEOS } from './constants';

export function useData() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [gallery, setGallery] = useState<GalleryImage[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedReviews = localStorage.getItem('reviews');
    const storedGallery = localStorage.getItem('gallery');
    const storedVideos = localStorage.getItem('videos');
    const authStatus = localStorage.getItem('admin_auth') === 'true';

    setReviews(storedReviews ? JSON.parse(storedReviews) : INITIAL_REVIEWS);
    setGallery(storedGallery ? JSON.parse(storedGallery) : INITIAL_GALLERY);
    setVideos(storedVideos ? JSON.parse(storedVideos) : INITIAL_VIDEOS);
    setIsAdmin(authStatus);
  }, []);

  const login = (password: string) => {
    if (password === 'admin123') {
      localStorage.setItem('admin_auth', 'true');
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('admin_auth');
    setIsAdmin(false);
  };

  const updateReviews = (newReviews: Review[]) => {
    setReviews(newReviews);
    localStorage.setItem('reviews', JSON.stringify(newReviews));
  };

  const updateGallery = (newGallery: GalleryImage[]) => {
    setGallery(newGallery);
    localStorage.setItem('gallery', JSON.stringify(newGallery));
  };

  const updateVideos = (newVideos: Video[]) => {
    setVideos(newVideos);
    localStorage.setItem('videos', JSON.stringify(newVideos));
  };

  return {
    reviews,
    gallery,
    videos,
    isAdmin,
    login,
    logout,
    updateReviews,
    updateGallery,
    updateVideos
  };
}
