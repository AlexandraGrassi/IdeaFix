import {ShortUser} from './shortUser.model';

export class User extends ShortUser {
  private _age: number;
  private _email: string;
  private _city: string;
  private _country: string;
  private _about: string;
  private _role: {
    id: number,
    name: string
  };

  constructor(id: number, name: string, nickname: string, pic: string, isBanned: boolean, age: number, email: string, city: string, country: string, about: string, role: { id: number; name: string }) {
    super(id, name, nickname, pic, isBanned);
    this._age = age;
    this._email = email;
    this._city = city;
    this._country = country;
    this._about = about;
    this._role = role;
  }


  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get about(): string {
    return this._about;
  }

  set about(value: string) {
    this._about = value;
  }

  get role(): { id: number; name: string } {
    return this._role;
  }

  set role(value: { id: number; name: string }) {
    this._role = value;
  }
}
