const BASE_URL = 'https://bootcamp-api.codeit.kr/api/';

const fetchPost = async (url, option) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, option);
    const result = await response.json();
    return result;
  } catch (e) {
    throw new Error();
  }
};

export default fetchPost;
