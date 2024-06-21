'use client'
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { CardTableType } from '@/app/lib/definitions';
import './style.css'
import Link from 'next/link';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import clsx from 'clsx';

export default function ModalCard({
    card, title,handleModal
  }: {
    card: CardTableType[];
    title: string;
    handleModal:any
  }) {
    const [flipCard, setFlipCard] = useState(false);
    const handleFlip = () => {
        setFlipCard(!flipCard);
      }
    
      return (
<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" onClick={
    // close modal when outside of modal is clicked
    handleModal}>
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" ></div>
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto" >
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="flex justify-center card" onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}>

          {/* front of the card */}
          <div className={clsx("card__side card__side--front block max-w-[18rem] rounded-lg border border-danger-600 bg-white shadow-secondary-1 dark:bg-surface-dark", flipCard && "flipped")} style={{ borderColor: title }} onClick={handleFlip} >
            <div className="border-b-2 border-neutral-100 px-6 py-3 text-surface dark:border-white/10 dark:text-white" style={{ borderColor: title }}>
              {title}
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-danger-600">
                front card title
              </h5>
              <p className="text-base text-danger-600">
                ke pasaaaaaa
              </p>
            </div>
          </div>

          {/* back of the card */}
          <div className={clsx("card__side card__side--back block max-w-[18rem] rounded-lg border border-danger-600 bg-white shadow-secondary-1 dark:bg-surface-dark", flipCard && "flipped")} style={{ borderColor: title }} onClick={handleFlip} >
            <div className="border-b-2 border-neutral-100 px-6 py-3 text-surface dark:border-white/10 dark:text-white" style={{ borderColor: title }}>
              ke pasa
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-danger-600">
                back card title
              </h5>
              <p className="text-base text-danger-600">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
            </div>
            <button onClick={handleModal}>que pasa</button>
          </div>
        </div>
      </div>
    </div>
  </div>)}