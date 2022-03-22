export class Background {
    private _id: number;
    private _imageUrl: string;
  
    constructor(id: number, imageUrl: string) {
      this._id = id;
      this._imageUrl = imageUrl;
    }
  
    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
      return this._id;
    }
  
    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
      this._id = value;
    }
  
    public get imageUrl(): string {
      return this._imageUrl;
    }
  
    public set imageUrl(imageUrl: string) {
      this._imageUrl = imageUrl;
    }
  }