/***
 * localStorage `class`
 */
export default class LocalStorage {
  constructor() {}

  /***
   * @param {string} key
   * @param {any} defaultValue - fullback data
   */
  static getItem(key, defaultValue = null) {
    return localStorage.getItem(key) ?? defaultValue;
  }

  static setItem(key, value) {
    localStorage.setItem(
      key,
      typeof value === "string" ? value : JSON.stringify(value)
    );
  }
}
