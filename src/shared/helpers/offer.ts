import { Offer, OfferType, ConvenienceType } from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [
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
  ] = offerData.replace('\n', '').split('\t');

  return {
    title,
    description,
    createdDate: new Date(createdDate),
    city,
    image,
    thumbs: thumbs.split(';')
      .map((el) => el),
    premium: premium === 'true',
    favorite: favorite === 'true',
    rating: Number(parseFloat(rating.replace(/,/g, '.')).toFixed(2)),
    type: OfferType[type as OfferType.apartment | OfferType.hotel | OfferType.house | OfferType.room],
    rooms: Number(rooms),
    guests: Number(guests),
    price: Number.parseInt(price, 10),
    conveniences: conveniences.split(';')
      .map((item) => <ConvenienceType>item),
    user: { email, firstname, lastname, avatarPath },
    comments: comments.split(';')
      .map((coord) => coord),
    coordinates: coordinates.split(';')
      .map((coord) => coord),
  };
}
