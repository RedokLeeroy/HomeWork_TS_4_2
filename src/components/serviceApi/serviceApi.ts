import axios, { AxiosResponse } from 'axios';
import { IData } from '../../interfaces';
axios.defaults.baseURL = `https://pixabay.com/api/`;
const API_KEY = '28342095-bdb3373d4270e11a929e663ef';
export const Service = (page:number, queue:string): Promise<AxiosResponse<{hits: Partial <IData>[]}>> => {
  return axios.get('', {
    params: {
      key: API_KEY,
      q: queue,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
};
