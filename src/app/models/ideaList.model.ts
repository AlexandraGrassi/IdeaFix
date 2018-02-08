import {Idea} from './idea.model';
import {ShortUser} from './shortUser.model';

export class IdeaList {
  private _id: number;
  private _name: string;
  private _isPrivate: boolean;
  private _setOfIdeas: Set<Idea>;
  private _author: ShortUser;

  constructor(id: number, name: string, isPrivate: boolean, setOfIdeas: Set<Idea>, author: ShortUser) {
    this._id = id;
    this._name = name;
    this._isPrivate = isPrivate;
    this._setOfIdeas = setOfIdeas;
    this._author = author;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get isPrivate(): boolean {
    return this._isPrivate;
  }

  set isPrivate(value: boolean) {
    this._isPrivate = value;
  }

  get setOfIdeas(): Set<Idea> {
    return this._setOfIdeas;
  }

  set setOfIdeas(value: Set<Idea>) {
    this._setOfIdeas = value;
  }

  get author(): ShortUser {
    return this._author;
  }

  set author(value: ShortUser) {
    this._author = value;
  }
}
