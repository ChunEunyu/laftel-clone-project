import axios from "axios";

const api = axios.create({
    baseURL: 'https://laftel.net/api/',
});

// 추천 테마에 대한 애니메이션 리스트
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
