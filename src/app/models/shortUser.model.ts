export class ShortUser {
  id: number;
  name: string;
  nickname: string;
  pic: string;
  isBanned: boolean;

  constructor(id: number, name: string, nickname: string, pic: string, isBanned: boolean) {
    this.id = id;
    this.name = name;
    this.nickname = nickname;
    this.pic = pic;
    this.isBanned = isBanned;
  }
}
