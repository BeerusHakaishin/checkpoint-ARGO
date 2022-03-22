export class Argonaute {
  private _description: string;
  private _name: string;
  private _id: number;
  private _dob: Date;
  
  constructor(
    description: string,
    name: string,
    id: number,
    dob: Date,
  ) {
    this._description = description;
    this._id = id;
    this._dob = dob;
    this._name = name;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
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

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter lastname
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

   /**
   * Getter createdAt
   * @return {Date}
   */
    public get dob(): Date {
        return this._dob;
      }
    
      /**
       * Setter createdAt
       * @param {Date} value
       */
      public set dob(value: Date) {
        this._dob = value;
      }
}