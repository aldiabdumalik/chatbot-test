'use client'
import { BubbleChatProps } from '@/types/dataType'
import Image from 'next/image'
import React from 'react'
import IconThumbs from '../Svg/IconThumbs'
import { useRecoilState } from 'recoil'
import { modalRatingStore } from '@/store/modalStore'

export default function BubbleChat({
  data, children
}: BubbleChatProps) {
  const [show, setShow] = useRecoilState(modalRatingStore);
  const handleLike = (like: string) => {
    setShow({
      show: true,
      type: like
    })
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
          <div className='flex-none text-[0.625rem]'>12:00</div>
        </div>
        {data.role === 1 && (
          <div className='flex gap-1 items-center justify-end'>
            <button
              type='button'
              className='p-[0.3rem]'
            >
              <Image src={'/img/icon/rotate-right.svg'} width={14} height={14} alt='icon-rotate' />
            </button>
            <button
              type='button'
              className='p-[0.3rem]'
            >
              <Image src={'/img/icon/copy.svg'} width={14} height={14} alt='icon-copy' />
            </button>
            <button
              type='button'
              className='p-[0.3rem]'
              onClick={() => handleLike('like')}
            >
              <IconThumbs width={14} height={16} borderColor={data.like ? undefined : '#fff'} fillColor={!data.like ? undefined : '#fff'} />
            </button>
            <button
              type='button'
              className='p-[0.3rem]'
              onClick={() => handleLike('notlike')}
            >
              <IconThumbs width={14} height={16} borderColor={data.like ? undefined : '#fff'} fillColor={!data.like ? undefined : '#fff'} className='rotate-180' />
            </button>
          </div>
        )}
      </div>
      {/* <div className={`absolute ${data.role === 1 ? 'left-0 top-8' : 'right-0'}`}>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" checked={true} className="checkbox" />
            </label>
          </div>
        </div> */}
    </div>
  )
}
