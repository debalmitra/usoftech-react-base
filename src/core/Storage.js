const Storage = {
  get(key) {
    return localStorage.getItem(key);
  },

  set(key, value) {
    localStorage.setItem(key, value);
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  },

  getLoginState() {
    return this.get("isLogin") === "1";
  },

  setLoginState(value) {
    this.set("isLogin", value ? "1" : "0");
  },

  logout() {
    this.setLoginState(false);
  },
};

export default Storage;
