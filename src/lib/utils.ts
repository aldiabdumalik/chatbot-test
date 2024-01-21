import { ResultData } from '@/types/dataType';

export const removeChatSelected = (data: ResultData[]) => {
  if (data.length > 0) {
    const selected = data.filter((vl: ResultData) => vl.selected != true);
    return selected;
  }

  return [];
};
export const countChatSelected = (data: ResultData[]) => {
  const selected = data.filter((vl: ResultData) => vl.selected);
  return selected.length;
};
export const fixMonth = (date: Date) => {
  const month = date.getMonth() + 1;
  return month.toString().padStart(2, '0');
};
export const editChat = (
  data: ResultData[],
  id: string | number,
  cht: string
) => {
  if (data.length > 0) {
    const dt = data.map((vl: ResultData, i: number) =>
      vl.id == id ? { ...vl, chat: cht } : { ...vl }
    );
    return dt;
  }

  return data;
};
