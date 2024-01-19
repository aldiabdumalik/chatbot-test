export type ResultData = {
  id: number;
  role: number;
  date: string;
  chat: string;
  selected: boolean;
  like?: boolean | null;
};

export type BubbleChatProps = {
  data: ResultData;
  children: React.ReactNode;
};
