import { OfferType } from './offer-type.enum.js';
import { ConvenienceType } from './convenience-type.enums.js';
import { User } from './user.type.js';

export type Offer = {
  title: string;
  description: string;
  createdDate: Date;
  city: string;
  image: string;
  thumbs: string[];
  premium: boolean;
  favorite: boolean;
  rating: number;
  type: OfferType;
  rooms: number;
  guests: number;
  price: number;
  conveniences: ConvenienceType[];
  user: User;
  comments: string[];
  coordinates: string[];
}
