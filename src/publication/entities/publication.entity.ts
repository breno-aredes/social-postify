export class Publication {
  constructor(
    private _image: string,
    private _title: string,
    private _text: string,
    private _dateToPublish: string,
    private _published: boolean,
    private _socialMedia: string,
  ) {}

  get image(): string {
    return this._image;
  }

  set image(image: string) {
    this._image = image;
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get text(): string {
    return this._text;
  }

  set text(text: string) {
    this._text = text;
  }

  get dateToPublish(): string {
    return this._dateToPublish;
  }

  set dateToPublish(dateToPublish: string) {
    this._dateToPublish = dateToPublish;
  }

  get published(): boolean {
    return this._published;
  }

  set published(published: boolean) {
    this._published = published;
  }

  get socialMedia(): string {
    return this._socialMedia;
  }

  set socialMedia(socialMedia: string) {
    this._socialMedia = socialMedia;
  }
}
