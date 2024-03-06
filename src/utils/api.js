import axios from "axios";
import { db } from "../firebase";
import { doc, setDoc, getDocs, collection } from "firebase/firestore";

const api = axios.create({
    baseURL: 'https://laftel.net/api',
});

// 홈 페이지에서의 추천 애니메이션 리스트
export const fetchRecommendAnime = async (number) => {
    try {
        const response = await api.post(`/home/v2/recommend/${number}/`);
        return response.data
    } catch (error) {
        console.error('Error fetching anime list:', error);
        throw error;
    }
};

// 요일 별 신작 애니메이션
export const fetchDailyAnime = async () => {
    try {
      // 요일 별 애니메이션 리스트 가져오기
      const response = await api.get('/search/v2/daily/');
      
      // 애니메이션의 id를 통해 디테일한 정보가 담겨 있는 애니메이션 데이터로 바꾸기
      const detailedResponseList = [];
      const detailedAnimeList = await Promise.all(response.data.map(async (item) => {
        try {
          const detailedResponse = await api.get(`/v1.0/items/${item.id}/detail/`);
          detailedResponseList.push(detailedResponse.data)
        } catch(error) {
          console.error(`Error fetching detail for item ${item.id}:`, error);
          return null;
        }
      }));
    
      return detailedResponseList;
    } catch (error) {
      console.error('Error fetching daily anime list:', error);
      throw error;
    }
};

// 테마 추천 페이지에서 테마 별 애니메이션 리스트 불러오기
export const fetchThemes = async () => {
  try {
    const response = await api.get('/recommends/v1/themes/?limit=60&offset=20');
    return response.data;
  } catch (error) {
    console.error('Error fetching daily anime list:', error);
    throw error;
  }
}; 

// 상세한 애니메이션 정보를 가져오기
export const fetchDetail = async (id) => {
  try {
    const response = await api.get(`/v1.0/items/${id}/detail/`);
    return response.data;

  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
}

// 태그 검색 페이지에서의 애니메이션 리스트 불러오기 - 직접 api를 통해 애니메이션 데이터를 불러오는 방법
/*
export const fetchFinder = async () => {
  const startNumber = 41790;
  const endNumber = 41850;
  try {
    let items = [];
    let promises = [];
    for (let number = startNumber; number <= endNumber; number ++) {
      promises.push(
        api.get(`v1.0/items/${number}/detail/`).then(response => {
          items.push(response.data);
        }).catch(error => {
          console.error(`Item ${number} not found, skipping...`);
        })
      );
    }
    await Promise.all(promises);
    return items;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};
*/

// 애니메이션을 검색하기 
export const fetchSearch  = async (searchQuery) => {
  try {
    // animations 컬렉션의 모든 문서 가져오기
    const querySnapshot = await getDocs(collection(db, 'animations'));
 
    // 입력한 검색 키워드가 포함된 애니메이션을 출력하기
    const animations = [];
    querySnapshot.forEach(doc => {
      if (doc.data().data.name.includes(searchQuery)) {
        animations.push(doc.data().data);
      }
    });
    
    return animations;
  } catch (error) {
    console.error('Error getting animations:', error);
    throw error;
  }
};

// 파이어베이스에 애니메이션 데이터 등록하기
export const fetchSaveToFirestore = async (searchQuery) => {
  const startNumber = 15850; // 임의의 숫자
  const endNumber = 15870; // 임의의 숫자

  try {
    for (let number = startNumber; number <= endNumber; number++) {
      const response = await api.get(`/v1.0/items/${number}/detail/`);
      await setDoc(doc(db, "animations", `animation_${number}`), {
        data: response.data
      });
    }
    
    return;
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

// 파이어베이스에서 모든 애니메이션 데이터를 읽어오기
export const getAllAnimeList = async () => {
  try {
    // animations 컬렉션의 모든 문서 가져오기
    const querySnapshot = await getDocs(collection(db, 'animations'));
 
    // 문서 데이터 추출
    const animations = [];
    querySnapshot.forEach(doc => {
      animations.push(doc.data());
    });
    
    return animations;
  } catch (error) {
    console.error('Error getting animations:', error);
    throw error;
  }
}

