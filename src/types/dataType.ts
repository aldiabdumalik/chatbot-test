export type ResultData = {
  id: number | string;
  role: number;
  date: Date;
  chat: string;
  selected: boolean;
  like?: boolean | null;
};

export type BubbleChatProps = {
  data: ResultData;
  children: React.ReactNode;
};
