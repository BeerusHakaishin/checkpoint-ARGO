import {Role} from './role.model';

export class Admin {
  private _name: string;
  private _id: number;
  private _roles: Role[];

  constructor(
    name: string,
    id: number,
    roles: Role[],
  ) {
    this._name = name;
    this._id = id;
    this._roles = roles;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
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
   * Getter roles
   * @return {Role[]}
   */
  public get roles(): Role[] {
    return this._roles;
  }

  /**
   * Setter roles
   * @param {Role[]} value
   */
  public set roles(value: Role[]) {
    this._roles = value;
  }
}