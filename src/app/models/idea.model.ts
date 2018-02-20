import {ShortUser} from './shortUser.model';
import {Tag} from './tag.model';
import {Media} from './media.model';

export class Idea {
  id: number;
  title: string;
  bigDescription: string;
  author: ShortUser;
  date: string;
  isBanned: boolean;
  setOfTags: Set<Tag>;
  listOfMedia: Array<Media>;
  countOfComments: number;
  amountOfViews: number;

  constructor(id: number, title: string, bigDescription: string, author: ShortUser, date: string, isBanned: boolean,
              setOfTags: Set<Tag>, listOfMedia: Array<Media>, countOfComments: number, amountOfViews: number) {
    this.id = id;
    this.title = title;
    this.bigDescription = bigDescription;
    this.author = author;
    this.date = date;
    this.isBanned = isBanned;
    this.setOfTags = setOfTags;
    this.listOfMedia = listOfMedia;
    this.countOfComments = countOfComments;
    this.amountOfViews = amountOfViews;
  }
}
