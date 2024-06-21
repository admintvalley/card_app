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

export default function CardTable({
  card, title
}: {
  card: CardTableType[];
  title: string
}) {
  const [modalActivate, setModalActivate] = useState(false);

  const handleModal = () => {
    setModalActivate(!modalActivate);
  }

  return (
    <div className="w-full">
      <div className='grid grid-cols-2'>
        <Link href={`/dashboard/`}> <ArrowLeftCircleIcon className="w-5" /></Link>
        <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
          Cards
        </h1>
      </div>

      {card?.map((card) => (
        <div className="flex justify-center" key={card.id} >
          <div className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 border"
          style={{ borderColor: title }}
          onClick={handleModal}
          key={card.id}>
            {card.title}
          </div>
        </div>
      ))}

      {modalActivate && <ModalCard card={card} title={title} handleModal={handleModal}></ModalCard>}
    </div>
  );
}
