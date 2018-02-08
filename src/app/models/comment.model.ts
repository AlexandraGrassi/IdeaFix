import {ShortUser} from './shortUser.model';

export class Comment {
  private _id: number;
  private _author: ShortUser;
  private _text: string;
  private _date: string;

  constructor(id: number, author: ShortUser, text: string, date: string) {
    this._id = id;
    this._author = author;
    this._text = text;
    this._date = date;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get author(): ShortUser {
    return this._author;
  }

  set author(value: ShortUser) {
    this._author = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }
}
