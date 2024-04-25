export interface ListQuestItem {
  id: number;
  title: string;
  description: string;
  previewImg: string;
  coverImg: string;
  type: string;
  level: string;
  peopleCount: number[];
  duration: number;
}

export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
}

export interface LoginUser {
  email: string;
  password: string;
}