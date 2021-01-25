export const localPath2Img = (path) => {
  const data = require(`../static/images/${path}`);
  return data ? data.default : null;
};
