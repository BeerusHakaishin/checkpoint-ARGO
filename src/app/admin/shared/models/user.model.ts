import { Role } from "./role.model";

export class User {
    private _id: number;
    private _username: string;
    private _roles: Role[];
    private _accessToken: string;
  
    constructor(id: number, username: string, accessToken: string, roles: Role[],) {
      this._id = id;
      this._username = username;
      this._accessToken = accessToken;
      this._roles = roles;
    }
  
    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
      return this._id;
    }
  
    /**
     * Getter username
     * @return {string}
     */
    public get username(): string {
      return this._username;
    }
  
    /**
     * Getter accessToken
     * @return {string}
     */
    public get accessToken(): string {
      return this._accessToken;
    }
  
    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
      this._id = value;
    }
  
    /**
     * Setter username
     * @param {string} value
     */
    public set username(value: string) {
      this._username = value;
    }
  
    /**
     * Setter accessToken
     * @param {string} value
     */
    public set accessToken(value: string) {
      this._accessToken = value;
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