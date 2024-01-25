export class Blogs {
  private _title: string;
  private _date: string;
  private _owner: string;

  constructor(title: string, date: string, owner: string) {
    this._title = title;
    this._date = date;
    this._owner = owner;
  }

  getTitle(): string {
    return this._title;
  }


  getDate(): string {
    return this._date;
  }

  getOwner(): string {
    return this._owner;
  }
}



