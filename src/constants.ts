import { Service, Review, GalleryImage, Video } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'AC Repair & Service',
    description: 'Expert repair and maintenance for all types of ACs (Window, Split, Inverter).',
    icon: 'AirVent',
    price: 'Starting from ₹499'
  },
  {
    id: '2',
    name: 'TV Repair',
    description: 'Professional repair for LED, LCD, and Smart TVs of all major brands.',
    icon: 'Tv',
    price: 'Starting from ₹699'
  },
  {
    id: '3',
    name: 'Refrigerator Repair',
    description: 'Quick fixing for cooling issues, gas refilling, and compressor repairs.',
    icon: 'Refrigerator',
    price: 'Starting from ₹599'
  },
  {
    id: '4',
    name: 'Cooler & Fan Repair',
    description: 'Motor winding, pump cleaning, and general servicing for coolers.',
    icon: 'Wind',
    price: 'Starting from ₹299'
  },
  {
    id: '5',
    name: 'Washing Machine Repair',
    description: 'Expert servicing for fully automatic and semi-automatic machines.',
    icon: 'WashingMachine',
    price: 'Starting from ₹799'
  },
  {
    id: '6',
    name: 'Microwave & Oven Repair',
    description: 'Magnetron replacement, touchpad repair, and general maintenance.',
    icon: 'Microwave',
    price: 'Starting from ₹499'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Suresh Kumar',
    content: 'Excellent service! They fixed my AC within an hour. Highly recommended.',
    rating: 5,
    date: '2024-03-15'
  },
  {
    id: '2',
    name: 'Anita Sharma',
    content: 'Very professional TV repair service. The technician was polite and knowledgeable.',
    rating: 4,
    date: '2024-03-10'
  }
];

export const INITIAL_GALLERY: GalleryImage[] = [
  { id: '1', url: 'https://picsum.photos/seed/ac-repair/800/600', title: 'AC Installation' },
  { id: '2', url: 'https://picsum.photos/seed/tv-service/800/600', title: 'TV Panel Repair' },
  { id: '3', url: 'https://picsum.photos/seed/fridge-repair/800/600', title: 'Fridge Gas Refill' },
  { id: '4', url: 'https://picsum.photos/seed/electronics/800/600', title: 'Workshop View' }
];

export const INITIAL_VIDEOS: Video[] = [
  { id: '1', youtubeId: 'dQw4w9WgXcQ', title: 'How we service ACs' },
  { id: '2', youtubeId: 'dQw4w9WgXcQ', title: 'TV Repair Process' }
];
