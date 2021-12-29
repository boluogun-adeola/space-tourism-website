/* Import data */
export const data = require("../data.json");
/* Import Images Function */
export function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
