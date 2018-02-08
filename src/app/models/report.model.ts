import {ShortUser} from './shortUser.model';
import {Idea} from './idea.model';

export class Report {
  private _id: number;
  private _author: ShortUser;
  private _reportedOn: Idea;
  private _description: string;
  private _date: string;

  constructor(id: number, author: ShortUser, reportedOn: Idea, description: string, date: string) {
    this._id = id;
    this._author = author;
    this._reportedOn = reportedOn;
    this._description = description;
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

  get reportedOn(): Idea {
    return this._reportedOn;
  }

  set reportedOn(value: Idea) {
    this._reportedOn = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }
}
