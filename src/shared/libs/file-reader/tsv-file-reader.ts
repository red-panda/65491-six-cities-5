import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer, OfferType, ConvenienceType } from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map((
        [
          title,
          description,
          createdDate,
          city,
          image,
          thumbs,
          premium,
          favorite,
          rating,
          type,
          rooms,
          guests,
          price,
          conveniences,
          firstname,
          lastname,
          email,
          avatarPath,
          comments,
          coordinates,
        ]) => ({
        title,
        description,
        postDate: new Date(createdDate),
        city,
        image,
        thumbs: thumbs.split(';')
          .map((el) => el),
        premium: premium === 'true',
        favorite: favorite === 'true',
        rating: Number(parseFloat(rating.replace(/,/g, '.')).toFixed(2)),
        type: OfferType[type as 'apartment' | 'house' | 'room' | 'hotel' ],
        rooms: parseInt(rooms, 2),
        guests: parseInt(guests, 2),
        price: Number.parseInt(price, 10),
        conveniences: conveniences.split(';')
          .map((item) => <ConvenienceType>item),
        user: { email, firstname, lastname, avatarPath },
        comments: parseInt(comments, 2),
        coordinates: coordinates.split(';')
          .map((el) => el),
      }));
  }
}
