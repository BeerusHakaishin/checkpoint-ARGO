export class User {
    private _id: number;
    private _username: string;
    private _role: string;
    private _accessToken: string;
  
    constructor(id: number, username: string, accessToken: string, role: string) {
      this._id = id;
      this._username = username;
      this._accessToken = accessToken;
      this._role = role;
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

    public get role(): string {
      return this._role;
    }
    public set role(value: string) {
      this._role = value;
    }
  }