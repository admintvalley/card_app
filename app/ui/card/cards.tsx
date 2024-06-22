'use client'
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { CardTableType } from '@/app/lib/definitions';
import './style.css'
import Link from 'next/link';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import clsx from 'clsx';
import ModalCard from './modal';
import { number } from 'zod';

export default function CardTable({
  card, title
}: {
  card: CardTableType[];
  title: string
}) {
  const [modalActivate, setModalActivate] = useState(false);
  const [cardId, setCardId] = useState(0);

  const handleModal = (id:number) => {
    setModalActivate(!modalActivate);
    setCardId(id);
  }

  return (
    <div className="w-full">
      <div className='grid grid-cols-2'>
        <Link href={`/dashboard/`}> <ArrowLeftCircleIcon className="w-5" /></Link>
        <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
          Cards
        </h1>
      </div>
      <div className='grid grid-cols-3 gap-6'>
      {card?.map((card,i) => (
        <div className="flex justify-center min-h-full" key={card.id} >
          <div className="text-sm hover:text-blue-600 md:p-2 md:px-3 border"
          style={{ borderColor: title }}
          onClick={()=>handleModal(i)}
          key={card.id}>
            {card.title}
          </div>
        </div>
      ))}
      </div>

      {modalActivate && <ModalCard card={card} title={title} id={cardId} handleModal={handleModal}></ModalCard>}
    </div>
  );
}
