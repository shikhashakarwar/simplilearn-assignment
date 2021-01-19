const verifyItem = (item, key) => {
  let value = null;
  if(!item || item.expTime < new Date().getTime()) {
    storage.removeItem(key);
    value = null;
  } else {
    value = item.value;
  }
  return value;
};

export const storage = {
    setItem: (key, value, options) => {
      let item = Object.assign({exp: 24*60*60*1000, currTime: new Date().getTime()}, options);
      item.expTime = new Date(item.currTime + item.exp).getTime();
      item.value = value;
      localStorage.setItem(key, JSON.stringify(item));
    },
    getItem: (key) => {
      let item = JSON.parse(localStorage.getItem(key));
      return verifyItem(item, key);
    },
    removeItem: (key) => {
      localStorage.removeItem(key);
    },
    
  };
  