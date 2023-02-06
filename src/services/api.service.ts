import { API_URL } from "../config";

export interface ApiResponse<D> {
  data: D
}

export interface IPostData {
      id: string;
      user: string;
      username: string;
      img: string;
      caption: string;
      likes: number;
}

class ApiService {

 static async fetchPosts() : Promise<ApiResponse<IPostData[]>>  {
    const url = `${API_URL}/posts`;
    const result = await fetch(url);
    const resultJson = await result.json();
    return resultJson;
  };
}

export default ApiService