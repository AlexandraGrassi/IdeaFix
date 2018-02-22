import {Tag} from "./tag.model";
import {Media} from "./media.model";

export class PostIdea {
  id: number;
  title: string;
  bigDescription: string;
  authorId: number;
  setOfTags: any;
  listOfMedia: any;


  constructor(id: number, title: string, bigDescription: string, authorId: number, setOfTags: any, listOfMedia: any) {
    this.id = id;
    this.title = title;
    this.bigDescription = bigDescription;
    this.authorId = authorId;
    this.setOfTags = setOfTags;
    this.listOfMedia = listOfMedia;
  }
}

