"use client"
import Navbar from "@/components/Navbar";
import BubbleChat from "@/components/Chat/BubbleChat";
import { useCallback, useEffect, useState } from "react";
import { dummyChat } from "@/lib/dummy";
import Image from "next/image";
import { countChatSelected, fixMonth, removeChatSelected } from "@/lib/utils";
import { ResultData } from "@/types/dataType";
import { useRecoilState } from "recoil";
import { chatStore, clientIdStore } from "@/store/chatStore";
import { useChat } from "ai/react";
import { Message } from "ai";
export default function Home() {
  const [onTap, setOnTap] = useState<null | string>(null);
  const [result, setResult] = useRecoilState<ResultData[] | []>(chatStore);
  const [idIncrement, setIncrement] = useRecoilState(clientIdStore);
  const { isLoading, messages, input, handleInputChange, handleSubmit } = useChat({
    onFinish: (message: Message) => {
      setResult((prev: any) => [...prev, {
        id: message.id,
        role: 1,
        date: message.createdAt,
        chat: message.content,
        selected: false,
        like: null,
      }])
    }
  });

  useEffect(() => {
    if (onTap == null) {
      const data = result.map((vl: ResultData) => { return { ...vl, selected: false } })
      setResult(data)
    }
  }, [onTap]);
  const handleChekbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = result.map((vl: ResultData) => vl.id == e.target.value ? { ...vl, selected: !vl.selected } : { ...vl })
    return setResult(data)
  }
  const handleSelectedAll = () => {
    const data = result.map((vl: ResultData) => { return { ...vl, selected: true } })
    return setResult(data)
  }
  const handleRemoveChat = () => {
    const chat = removeChatSelected(result);
    return setResult(chat)
  }
  const handleSubmitFrom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult((prev: any) => [...prev, {
      id: idIncrement + 1,
      role: 2,
      date: new Date(),
      chat: input,
      selected: false,
      like: null,
    }])
    setIncrement((prev: number) => prev + 1);
    handleSubmit(e);
  }
  return (
    <main className="flex flex-col w-full lg:w-1/3 bg-white min-h-[100dvh]">
      <Navbar isLoading={isLoading} setOnTap={setOnTap} />
      <div className="flex flex-col flex-1 py-2 px-4 gap-2">
        {result && result.map((dt: ResultData, i: number) => {
          return (
            <div key={i} className={`relative flex flex-col ${onTap && 'px-8'}`}>
              <BubbleChat data={dt}>{dt.chat}</BubbleChat>
              {onTap == 'option' && (
                <div className={`absolute ${dt.role === 1 ? 'left-0 inset-y-[55%]' : 'right-0 top-2'}`}>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input type="checkbox" checked={dt.selected} className="checkbox checkbox-primary" value={dt.id} onChange={(e) => handleChekbox(e)} />
                    </label>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className={`flex justify-center py-2 px-8 sticky bottom-0 bg-white ${onTap && 'border-t'}`}>
        {onTap == 'option' ? (
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center text-sm text-[#212121] font-semibold">
              <span className="p-2">{countChatSelected(result)} Terpilih</span>
              <div>|</div>
              <button type="button" className="p-2" onClick={handleSelectedAll}>
                Pilih semua
              </button>
            </div>
            <button type="button" className="flex gap-2 items-center" onClick={handleRemoveChat}>
              <Image src={'/img/icon/trash.svg'} width={14} height={14} alt="icon-trash" />
              <span className="text-sm text-[#FF4E00]">Hapus</span>
            </button>
          </div>
        ) : (
          <form onSubmit={(e) => handleSubmitFrom(e)} className="w-full">
            <input
              type="text"
              placeholder="Send Message..."
              className="input input-bordered border-[#DEDEDE] bg-white w-full text-[#121212] text-lg"
              onChange={handleInputChange}
              value={input}
            />
          </form>
        )}
      </div>
    </main >
  );
}