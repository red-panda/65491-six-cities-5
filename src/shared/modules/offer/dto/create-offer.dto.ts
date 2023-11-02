import { ConvenienceType, OfferType, User } from '../../../types/index.js';

export class CreateOfferDto {
  public title: string;
  public description: string;
  public createdDate: Date;
  public city: string;
  public image: string;
  public thumbs: string[];
  public premium: boolean;
  public favorite: boolean;
  public rating: number;
  public type: OfferType;
  public rooms: number;
  public guests: number;
  public price: number;
  public conveniences: ConvenienceType[];
  public user: User;
  public comments: string[];
  public coordinates: string[];
}
