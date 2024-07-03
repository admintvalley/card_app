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

  const handleModal = (id: number) => {
    setModalActivate(!modalActivate);
    setCardId(id);
  }
  
  return (
    <div className="w-full">
      { title && 
      <div className='grid grid-cols-2'>
        <Link href={`/dashboard/`}> <ArrowLeftCircleIcon className="w-5" /></Link>
        <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
          Cards - {title}
        </h1>
      </div>}
      <div className='flex flex-row flex-wrap justify-around gap-4 col-3'>
        {card?.map((card, i) => (
          <div className="flex flex-col justify-between sm:w-1/3 md:w-1/3 xl:w-1/4 w-full p-4 bg-white border border-gray-200 rounded-lg shadow"
            style={{ borderBottomColor: title || card.categories_title  }}
            key={card.id} 
            onClick={() => handleModal(i)}>
            <div>
              <h5 className="text-xl font-medium text-gray-900">
                {card.title || card.categories_title}
              </h5>
              <span className="block mb-2 text-sm font-small text-gray-900">
                {title || card.categories_title} Category
              </span>
            </div>
            <div className='flex flex-row justify-between'>
              <div className="text-sm font-medium text-gray-500 ">
                Revision {card.revision}
              </div>
              {/* <div className="text-sm font-medium text-gray-500 ">
                Date  
              </div> */}
            </div>
          </div>
        ))
       }
      </div>

      {modalActivate && <ModalCard card={card} title={title} id={cardId} handleModal={handleModal}></ModalCard>}
    </div>
  );
}
