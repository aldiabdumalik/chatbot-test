export type BubbleChatProps = {
  data: {
    role: number;
    date: string;
    selected: boolean;
  };
  children: React.ReactNode;
};
