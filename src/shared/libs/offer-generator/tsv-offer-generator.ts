import dayjs from 'dayjs';
import { OfferGenerator } from './offer-generator.interface.js';
import { MockServerData, OfferType } from '../../types/index.js';
import {generateRandomBoolean, generateRandomValue, getRandomItem, getRandomItems} from '../../helpers/index.js';

const MIN_PRICE = 100;
const MAX_PRICE = 100000;

const MIN_RATING = 1;
const MAX_RATING = 5;

const MIN_ROOM = 1;
const MAX_ROOM = 8;

const MIN_GUEST = 1;
const MAX_GUEST = 10;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const city = getRandomItem<string>(this.mockData.city);
    const image = getRandomItem<string>(this.mockData.image);
    const thumbs = getRandomItem<string[]>(this.mockData.thumbs).join(';');
    const premium = generateRandomBoolean();
    const favorite = generateRandomBoolean();
    const rating = generateRandomValue(MIN_RATING, MAX_RATING).toString();
    const type = getRandomItem([OfferType.apartment, OfferType.house, OfferType.room, OfferType.hotel]);
    const rooms = generateRandomValue(MIN_ROOM, MAX_ROOM).toString();
    const guests = generateRandomValue(MIN_GUEST, MAX_GUEST).toString();
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const conveniences = getRandomItems<string>(this.mockData.conveniences).join(';');
    const author = getRandomItem(this.mockData.users);
    const email = getRandomItem(this.mockData.emails);
    const avatar = getRandomItem(this.mockData.avatarPath);
    const comments = getRandomItems<string>(this.mockData.comments).join(';');
    const coordinates = this.mockData.coordinates[city].join(';');

    const createdDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();

    const [firstname, lastname] = author.split(' ');

    return [
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
      firstname, lastname, email, avatar,
      comments,
      coordinates,
    ].join('\t');
  }
}
