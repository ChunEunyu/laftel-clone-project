import axios from "axios";

const api = axios.create({
    baseURL: 'https://laftel.net/api/',
});

// 홈 페이지에서의 추천 애니메이션 리스트
export const fetchRecommendAnime = async (number) => {
    try {
        const response = await api.post(`home/v2/recommend/${number}/`);
        return response.data

    } catch (error) {
        console.error('Error fetching anime list:', error);
        throw error;
    }
};

// 요일 별 신작 애니메이션
export const fetchDailyAnime = async () => {
    try {
      const response = await api.get('search/v2/daily/');
      return response.data;
    } catch (error) {
      console.error('Error fetching daily anime list:', error);
      throw error;
    }
};

// 테마 추천 페이지에서 테마 별 애니메이션 리스트 불러오기
export const fetchThemes = async () => {
  try {
    const response = await api.get('recommends/v1/themes/?limit=20&offset=10');
    return response.data;
  } catch (error) {
    console.error('Error fetching daily anime list:', error);
    throw error;
  }
}
