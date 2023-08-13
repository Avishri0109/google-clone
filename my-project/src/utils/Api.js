import axios from 'axios';

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyCUGJN3Zyb84BDRk33_45NzTd1YXIKAcYk",
  cx: "a66ee2dfae04f4030",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};