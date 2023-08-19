export const getCookie = (name) => {
  if (!name) {
    return "";
  }
  let cookie = {};
  document.cookie.split(";").forEach(function (el) {
    let [key, value] = el.split("=");
    cookie[key.trim()] = value;
  });
  return cookie[name];
};

export const setCookie = (name, value) => {
  document.cookie = name + "=" + value + ";";
};

export const deleteCookie = (name) => {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};
