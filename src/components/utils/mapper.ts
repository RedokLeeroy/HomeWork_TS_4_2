import { IData } from "../../interfaces";
export const mapper = (images: {hits: Partial<IData>[]}) => {
  return images.hits.map(({ largeImageURL, webformatURL, id }) => ({
    largeImageURL,
    webformatURL,
    id,
  }));
};
