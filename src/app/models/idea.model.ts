import {ShortUser} from './shortUser.model';
import {Tag} from './tag.model';
import {Media} from './media.model';

export class Idea {
  private _id: number;
  private _title: string;
  private _bigDescription: string;
  private _author: ShortUser;
  private _date: string;
  private _isBanned: boolean;
  private _setOfTags: Set<Tag>;
  private _listOfMedia: Array<Media>;
  private _countOfComments: number;
  private _amountOfViews: number;

  constructor(id: number, title: string, bigDescription: string, author: ShortUser, date: string, isBanned: boolean,
              setOfTags: Set<Tag>, listOfMedia: Array<Media>, countOfComments: number, amountOfViews: number) {
    this._id = id;
    this._title = title;
    this._bigDescription = bigDescription;
    this._author = author;
    this._date = date;
    this._isBanned = isBanned;
    this._setOfTags = setOfTags;
    this._listOfMedia = listOfMedia;
    this._countOfComments = countOfComments;
    this._amountOfViews = amountOfViews;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get bigDescription(): string {
    return this._bigDescription;
  }

  set bigDescription(value: string) {
    this._bigDescription = value;
  }

  get author(): ShortUser {
    return this._author;
  }

  set author(value: ShortUser) {
    this._author = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get isBanned(): boolean {
    return this._isBanned;
  }

  set isBanned(value: boolean) {
    this._isBanned = value;
  }

  get setOfTags(): Set<Tag> {
    return this._setOfTags;
  }

  set setOfTags(value: Set<Tag>) {
    this._setOfTags = value;
  }

  get listOfMedia(): Array<Media> {
    return this._listOfMedia;
  }

  set listOfMedia(value: Array<Media>) {
    this._listOfMedia = value;
  }

  get countOfComments(): number {
    return this._countOfComments;
  }

  set countOfComments(value: number) {
    this._countOfComments = value;
  }

  get amountOfViews(): number {
    return this._amountOfViews;
  }

  set amountOfViews(value: number) {
    this._amountOfViews = value;
  }
}
