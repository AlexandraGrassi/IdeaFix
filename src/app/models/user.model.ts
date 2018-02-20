import {ShortUser} from './shortUser.model';
import {Idea} from './idea.model';

export class User extends ShortUser {
  password: string;
  age: number;
  email: string;
  city: string;
  country: string;
  about: string;
  setOfFavoriteIdeas: Set<Idea>;
  role: {
    id: number,
    name: string
  };


  constructor(id: number, name: string, nickname: string, pic: string, isBanned: boolean, password: string,
              age: number, email: string, city: string, country: string, about: string, setOfFavoriteIdeas: Set<Idea>,
              role: { id: number; name: string }) {
    super(id, name, nickname, pic, isBanned);
    this.password = password;
    this.age = age;
    this.email = email;
    this.city = city;
    this.country = country;
    this.about = about;
    this.setOfFavoriteIdeas = setOfFavoriteIdeas;
    this.role = role;
  }

  /*get age(): number {
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

   get setOfFavoriteIdeas(): Set<Idea> {
   return this._setOfFavoriteIdeas;
   }

   set setOfFavoriteIdeas(value: Set<Idea>) {
   this._setOfFavoriteIdeas = value;
   }

   get role(): { id: number; name: string } {
   return this._role;
   }

   set role(value: { id: number; name: string }) {
   this._role = value;
   }

   get password(): string {
   return this._password;
   }

   set password(value: string) {
   this._password = value;
   }*/
}
