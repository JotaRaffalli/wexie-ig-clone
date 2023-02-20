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

export interface IProfileData {
  id: string;
  name: string;
  lastName: string;
  username: string;
  profilePicture: string;
  likedPictures: string[];
  following: string[];
  followers: string[];
}

export interface ISuggestions {
  id: string;
  username: string;
  profilePicture: string;
}

class ApiService {

  static async fetchPosts() : Promise<ApiResponse<IPostData[]>>  {
    const url = `${API_URL}/posts`;
    const result = await fetch(url);
    const resultJson = await result.json();
    return resultJson;
  };

  static async fetchMe() : Promise<ApiResponse<IProfileData>>  {
    const url = `${API_URL}/me`;
    const result = await fetch(url);
    const resultJson = await result.json();
    return resultJson;
  };

  static async fetchSuggestions(following: string[], userId: string) : Promise<ApiResponse<ISuggestions[]>>  {
    const params = new URLSearchParams({following: following.join(","), userId: userId});
    const url = `${API_URL}/user/suggestions`+params;
    const result = await fetch(url);
    const resultJson = await result.json();
    return resultJson;
  };

  static async fetchProfile(username: string) : Promise<ApiResponse<IProfileData>>  {
    const params = new URLSearchParams({username});
    const url = `${API_URL}/profile/`+params;
    const result = await fetch(url);
    const resultJson = await result.json();
    return resultJson;
  };
}

export default ApiService