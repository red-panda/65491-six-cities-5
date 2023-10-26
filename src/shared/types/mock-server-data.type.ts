export type MockServerData = {
  titles: string[];
  descriptions: string[];
  city: string[];
  image: string[];
  thumbs: string[][];
  type: string[];
  rooms: number[];
  guests: number[];
  conveniences: string[];
  users: string[];
  emails: string[];
  avatarPath: string[];
  comments: string[];
  coordinates: {
    [city: string]: string[]
  };
};
