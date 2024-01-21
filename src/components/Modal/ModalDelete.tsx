'use client'
import { modalDeleteStore, modalRatingStore } from '@/store/modalStore'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import IconThumbs from '../Svg/IconThumbs';
import { chatStore } from '@/store/chatStore';
import { ResultData } from '@/types/dataType';

export default function ModalDelete() {
  const [modal, setModal] = useRecoilState(modalDeleteStore);
  const [result, setResult] = useRecoilState<ResultData[] | []>(chatStore);
  const handleSubmit = (e: any) => {
    e.preventDefault()
    setResult(modal.data);
    return setModal({
      show: false,
      data: []
    })
  }
  return (
    <>
      <input type="checkbox" checked={modal.show} id="modal-delete" className="modal-toggle" onChange={() => false} />
      <div className="modal" role="dialog">
        <div className="modal-box bg-white text-[#121212]">
          <div className="flex items-center justify-between lg:px-6 mb-4">
            <h3 className="font-bold text-base text-[#121212]">Hapus Chat</h3>
          </div>
          <div className='flex flex-col items-center gap-6 lg:px-6'>
            <p className="">
              Kamu akan menghapus chat ini, chat yang telah dihapus tidak dapat dipulihkan
            </p>
            <form id='form-delete' onSubmit={(e) => handleSubmit(e)} className='flex flex-col w-full gap-4'>
              <button
                className="btn btn-full bg-[#FE6052] text-white hover:bg-white hover:text-[#FE6052] hover:border-[#FE6052] border border-transparent rounded-full"
              >
                Hapus sekarang
              </button>
              <button
                type='button'
                className="btn btn-full border-none text-primary hover:bg-white font-bold bg-transparent rounded-full"
                onClick={() => setModal({
                  show: false,
                  data: []
                })}
              >
                Kembali
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
