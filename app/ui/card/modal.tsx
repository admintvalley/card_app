'use client'
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { CardTableType } from '@/app/lib/definitions';
import './style.css'
import Link from 'next/link';
import { ArrowLeftCircleIcon, ArrowUturnRightIcon, LockClosedIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import clsx from 'clsx';

export default function ModalCard({
  card, title, handleModal,id
}: {
  card: CardTableType[];
  title: string;
  handleModal: any;
  id:number
}) {
  const [flipCard, setFlipCard] = useState(false);
  const handleFlip = () => {
    setFlipCard(!flipCard);
  }


  return (
    <div className="relative z-10 sl" aria-labelledby="modal-title" role="dialog" aria-modal="true" onClick={
      // close modal when outside of modal is clicked
      handleModal}>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" ></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto" >
        <div className="flex mt-14 items-center justify-center self-center p-4 text-center sm:items-center sm:p-0">
          <div className="card  text-center " onClick={e => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}>

            {/* front of the card */}
            <div className={clsx("card__side card__side--front block max-w-[40rem] rounded-lg border border-danger-600 bg-white shadow-secondary-1", flipCard && card[id].description_back && "flipped")} style={{ borderBottomColor: title || card[id].categories_title }} onClick={handleFlip} >
              <div className="border-b-2 border-neutral-100 px-6 py-3 text-surface  flex flex-row justify-between" style={{ borderBottomColor: title || card[id].categories_title }}>
                <div>{card[id].title}</div>
                <button onClick={handleModal}><XCircleIcon className="w-5" /></button>
              </div>
              <div className="p-6">
                <p className="text-danger-200 text-sm">
                  {card[id].description_front}
                </p>
              </div>
              <div className='m-6 flex flex-row-reverse'>
              <ArrowUturnRightIcon className="w-6  justify-end"></ArrowUturnRightIcon> 
              </div>
              
            </div>
            {/* back of the card */}
           { card[id].description_back &&
            <div className={clsx("card__side card__side--back block max-w-[40rem] rounded-lg border border-danger-600 bg-white shadow-secondary-1", flipCard && card[id].description_back && "flipped")} style={{ borderBottomColor: title || card[id].categories_title }} onClick={handleFlip} >
              <div className="border-b-2 border-neutral-100 px-6 py-3 text-surface flex flex-row justify-between" style={{ borderBottomColor: title || card[id].categories_title }}>
                <div>{card[id].title}</div>
                <button onClick={handleModal}><XCircleIcon className="w-5" /></button>
              </div>
              <div className="p-6">
                <p className="text-danger-200 text-sm">
                  {card[id].description_back}
                </p>
              </div>            
              
              <div className='m-6 flex flex-row-reverse'>
              <ArrowUturnRightIcon className="w-6  justify-end"></ArrowUturnRightIcon> 
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>)
}