'use client'
import { modalRatingStore } from '@/store/modalStore'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import IconThumbs from '../Svg/IconThumbs';
import { chatStore } from '@/store/chatStore';
import { ResultData } from '@/types/dataType';

export default function ModalRating() {
  const [show, setShow] = useRecoilState(modalRatingStore);
  const [result, setResult] = useRecoilState<ResultData[] | []>(chatStore);
  const handleSubmit = (e: any) => {
    e.preventDefault()
    // alert(show.idChat)
    const data = result.map((vl: ResultData) => vl.id == show.idChat ? { ...vl, like: show.type == 'like' } : { ...vl });
    setResult(data);
    return setShow({
      show: false,
      type: 'like',
      idChat: 0
    })
  }
  return (
    <>
      <input type="checkbox" checked={show.show} id="modal_rating" className="modal-toggle" onChange={() => false} />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white text-[#121212]">
          <div className="flex items-center justify-between lg:px-6">
            <h3 className="font-bold text-base text-[#121212]">Rating</h3>
            <button
              type='button'
              className='font-bold'
              onClick={() => setShow({ show: false, type: '', idChat: 0 })}
            >
              X
            </button>
          </div>
          <div className='flex flex-col items-center gap-4 lg:px-6'>
            <div className={`flex items-center p-3 mt-2 rounded-full ${show.type == 'like' ? 'bg-[#F0F1FF]' : 'bg-[#FFF6E9]'}`}>
              <IconThumbs width={28} height={30} borderColor={show.type == 'like' ? '#979CFF' : '#FFC267'} className={`${show.type == 'notlike' && 'rotate-180'}`} />
            </div>
            <div className='flex flex-col gap-1 items-center text-center'>
              <h3 className='font-bold'>Kamu {show.type == 'like' ? 'menyukai' : 'tidak menyukai'} balasan AI</h3>
              <span>Ceritakan pengalaman tentang balasan chat ini</span>
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col w-full gap-4'>
              <textarea placeholder="Berikan tanggapanmu" className="textarea textarea-bordered textarea-md w-full bg-white" ></textarea>
              <button
                className="btn btn-full bg-primary rounded-full"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
