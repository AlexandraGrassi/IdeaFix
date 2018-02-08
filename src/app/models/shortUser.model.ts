export class ShortUser {
  private _id: number;
  private _name: string;
  private _nickname: string;
  private _pic: string;
  private _isBanned: boolean;

  constructor(id: number, name: string, nickname: string, pic: string, isBanned: boolean) {
    this._id = id;
    this._name = name;
    this._nickname = nickname;
    this._pic = pic;
    this._isBanned = isBanned;
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

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get pic(): string {
    return this._pic;
  }

  set pic(value: string) {
    this._pic = value;
  }

  get isBanned(): boolean {
    return this._isBanned;
  }

  set isBanned(value: boolean) {
    this._isBanned = value;
  }
}
