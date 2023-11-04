import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { ConvenienceType, OfferType } from '../../types/index.js';
import { UserEntity } from '../user/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({ trim: true, required: true })
  public title!: string;

  @prop({trim: true})
  public description!: string;

  @prop()
  public createdDate!: Date;

  @prop()
  public city!: string;

  @prop()
  public image!: string;

  @prop()
  public thumbs!: string[];

  @prop()
  public premium!: boolean;

  @prop()
  public favorite!: boolean;

  @prop()
  public rating!: number;

  @prop({
    type: () => String,
    enum: OfferType,
  })
  public type!: OfferType;

  @prop()
  public rooms!: number;

  @prop()
  public guests!: number;

  @prop()
  public price!: number;

  @prop({default: 0})
  public commentCount!: number;

  @prop({
    type: () => String,
    enum: ConvenienceType,
  })
  public conveniences!: ConvenienceType[];

  // @prop({
  //   ref: ConvenienceType,
  //   required: true,
  //   default: [],
  //   _id: false
  // })
  // public conveniences!: Ref<ConvenienceType>[];

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;

  @prop()
  public coordinates!: string[];
}

export const OfferModel = getModelForClass(OfferEntity);
