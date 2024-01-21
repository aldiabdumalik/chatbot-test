'use client'
import { BubbleChatProps, ResultData } from '@/types/dataType'
import Image from 'next/image'
import React, { useEffect } from 'react'
import IconThumbs from '../Svg/IconThumbs'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { modalRatingStore } from '@/store/modalStore'
import { Message, useChat, useCompletion } from 'ai/react'
import { aiIsLoading, chatStore } from '@/store/chatStore'
import { editChat } from '@/lib/utils'

export default function BubbleChat({
  data, children
}: BubbleChatProps) {
  const [result, setResult] = useRecoilState(chatStore);
  const setModal = useSetRecoilState(modalRatingStore);
  const setLoading = useSetRecoilState(aiIsLoading)
  const { isLoading, handleSubmit } = useChat({
    id: data.id as string,
    initialInput: data?.soal || '',
    onFinish: (message: Message) => {
      const change = editChat(result, data.id, message.content);
      return setResult(change);
    }
  });
  useEffect(() => setLoading(isLoading), [isLoading])
  const handleLike = (like: string) => {
    setModal({
      show: true,
      type: like,
      idChat: data.id
    })
  }
  const convertDate = (date: Date) => {
    return `${date.getHours()}:${date.getMinutes()}`;
  }
  const copyChat = (chat: string) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(chat);
    }
  }
  function onRegenerateAnswer(e: React.FormEvent<HTMLFormElement>) {
    // const stop = soal?.split("(stop)").length ?? 0;
    if (data?.soal && !isLoading) {
      console.log('test')
      handleSubmit(e);
    }
  }
  return (
    <div className={`chat ${data.role === 1 ? 'chat-start' : 'chat-end'}`}>
      {data.role === 1 && <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <Image src={'/img/profile/avatar.webp'} width={24} height={24} alt='avatar' />
        </div>
      </div>}
      <div className={`flex flex-col gap-2 chat-bubble ${data.role === 1 ? 'bg-[#2B2E63] text-[#FAFAFA]' : 'bg-[#EDEDED] text-[#212121]'}`}>
        <div className='flex gap-2 items-end'>
          <div className='flex-1 text-sm font-semibold'>{children}</div>
          <div className='flex-none text-[0.625rem]'>{convertDate(data.date)}</div>
        </div>
        {data.role === 1 && (
          <div className='flex gap-1 items-center justify-end'>
            <form onSubmit={(e) => onRegenerateAnswer(e)}>
              <button
                type='submit'
                className='p-[0.3rem]'
              >
                <Image src={'/img/icon/rotate-right.svg'} width={14} height={14} alt='icon-rotate' />
              </button>
            </form>
            <button
              type='button'
              className='p-[0.3rem]'
              onClick={() => copyChat(data.chat)}
            >
              <Image src={'/img/icon/copy.svg'} width={14} height={14} alt='icon-copy' />
            </button>
            <button
              type='button'
              className='p-[0.3rem]'
              onClick={() => handleLike('like')}
            >
              <IconThumbs width={14} height={16} borderColor={data.like == null ? '#fff' : data.like ? undefined : '#fff'} fillColor={data.like !== null ? !data.like ? undefined : '#fff' : undefined} />
            </button>
            <button
              type='button'
              className='p-[0.3rem]'
              onClick={() => handleLike('notlike')}
            >
              <IconThumbs width={14} height={16} borderColor={data.like == null ? '#fff' : !data.like ? undefined : '#fff'} fillColor={data.like !== null ? data.like ? undefined : '#fff' : undefined} className='rotate-180' />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
