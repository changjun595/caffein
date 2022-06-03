export interface ICamp {
    id: number;
    name: string;
    type: string;
    status: "모집중" | "오픈" | "완료";
    field: string;
    skill: string;
    startDate: string;
    thumbnail: string;
  }
  
  export interface ICommunity {
    id: number;
    tags: string[];
    title: string;
    content: string;
    comments: { profile: string; nickname: string; content: string }[];
  }
  export interface IComment {
    profile: string;
    nickname: string;
    content: string;
  }