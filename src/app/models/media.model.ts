export class Media {
  private _id: number;
  private _mediaUrl: string;

  constructor(id: number, mediaUrl: string) {
    this._id = id;
    this._mediaUrl = mediaUrl;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get mediaUrl(): string {
    return this._mediaUrl;
  }

  set mediaUrl(value: string) {
    this._mediaUrl = value;
  }
}
