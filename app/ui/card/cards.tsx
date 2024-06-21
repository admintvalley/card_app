'use client'
import 
{ lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {CardTableType} from '@/app/lib/definitions';
import './style.css'
import Link from 'next/link';
import {ArrowLeftCircleIcon} from '@heroicons/react/24/outline';
import { useState } from 'react';
import clsx from 'clsx';

export default function CardTable({
  card,title
}: {
  card: CardTableType[];
  title:string
}) {
  const [modalActivate, setModalActivate] = useState(false);
  const [flipCard, setFlipCard] = useState(false);

  const handleModal= ()=>{
      setModalActivate(!modalActivate);
   
   
  }

  const handleFlip= ()=>{
    setFlipCard(!flipCard);
  }

  
  
  return (
    <div className="w-full">
      <div className='grid grid-cols-2'>
      <Link
    href={`/dashboard/`}
    > <ArrowLeftCircleIcon className="w-5" /></Link>
    <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Cards
      </h1>
      </div>
      
      
      
                {card?.map((card) => (
                //   <div className="flex justify-center card" key={card.id} >
                //   <div className="card__side card__side--front block max-w-[18rem] rounded-lg border border-danger-600 bg-white shadow-secondary-1 dark:bg-surface-dark" style={{ borderColor: title }}>
                //     <div className="border-b-2 border-neutral-100 px-6 py-3 text-surface dark:border-white/10 dark:text-white" style={{ borderColor: title }}>
                //     {card.title}
                //     </div>
                //     <div className="p-6">
                //       <h5 className="mb-2 text-xl font-medium leading-tight text-danger-600">
                //         front card title
                //       </h5>
                //       <p className="text-base text-danger-600">
                //       {card.description}
                //       </p>
                //     </div>
                   

                //   </div>
                //   <div className="card__side card__side--back block max-w-[18rem] rounded-lg border border-danger-600 bg-white shadow-secondary-1 dark:bg-surface-dark" style={{ borderColor: title }}>
                //     <div className="border-b-2 border-neutral-100 px-6 py-3 text-surface dark:border-white/10 dark:text-white" style={{ borderColor: title }}>
                //     {card.title}
                //     </div>
                //     <div className="p-6">
                //       <h5 className="mb-2 text-xl font-medium leading-tight text-danger-600">
                //         back card title
                //       </h5>
                //       <p className="text-base text-danger-600">
                //         Some quick example text to build on the card title and make up
                //         the bulk of the card's content.
                //       </p>
                //     </div>
                //   </div>
                // </div>
                 <button onClick={handleModal} key={card.id}>que pasa</button>
                ))}   

                { modalActivate && 
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true"  onClick={
                  // close modal when outside of modal is clicked
                  handleModal}>
           
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" ></div>
              
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto" >
                  <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                  <div className="flex justify-center card"   onClick={e => {
                    // do not close modal if anything inside modal content is clicked
                    e.stopPropagation();
                    }}>
                 <div className={clsx("card__side card__side--front block max-w-[18rem] rounded-lg border border-danger-600 bg-white shadow-secondary-1 dark:bg-surface-dark",flipCard&&"flipped")} style={{ borderColor: title }} onClick={handleFlip} >
                 <div className="border-b-2 border-neutral-100 px-6 py-3 text-surface dark:border-white/10 dark:text-white" style={{ borderColor: title }}>
                  titulo
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
                 <div className={clsx("card__side card__side--back block max-w-[18rem] rounded-lg border border-danger-600 bg-white shadow-secondary-1 dark:bg-surface-dark",flipCard&&"flipped")} style={{ borderColor: title }} onClick={handleFlip} >

                 {/* <div className="card__side card__side--back block max-w-[18rem] rounded-lg border border-danger-600 bg-white shadow-secondary-1 dark:bg-surface-dark " style={{ borderColor: title }} onClick={handleFlip} > */}
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
                    {/* <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                            </svg>
                          </div>
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={handleModal}>Cancel</button>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              }      
    </div>
  );
}

{/* <div
                   
className="mb-2 w-full rounded-md bg-white p-4"
>
<div className="flex items-center justify-between border-b pb-4">
  <div>
    <div className="mb-2 flex items-center">
      <div className="flex items-center gap-3">
        <p>{card.title}</p>{title}
      </div>
    </div>
  </div>
</div>

<div className="pt-4 text-sm">
  <p className='sl'>{card.description}</p>
</div>


<section className="card" >
  <div className="card__side card__side--front border border-b-2 border-solid" style={{ borderColor: title }}>
    <p>Front</p>
    </div>
    
    <div className="card__side card__side--back border border-b-2 border-solid" style={{ borderColor: title }}>
    <p>Back</p>
    </div>
</section>


</div> */}