export const removeChatSelected = (data: any) => {
  if (data.length > 0) {
    const selected = data.filter((vl: any) => vl.selected != true);
    return selected;
  }

  return [];
};
export const countChatSelected = (data: any) => {
  const selected = data.filter((vl: any) => vl.selected);
  return selected.length;
};
