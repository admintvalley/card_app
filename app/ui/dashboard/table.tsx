import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchCardByWord, fetchFilteredInvoices } from '@/app/lib/data';
import { CardTableType } from '@/app/lib/definitions';

export default async function CardsTable({
  query
}: {
  query: string;
  currentPage: number;
}) {

  const cards = await fetchCardByWord(query);

  return (
    <div className="mt-6 mb-6 w-full">
       <div className=''>
      {cards && <div className=" min-w-full ">
        <div className="flex flex-row flex-wrap justify-center gap-4 col-3">
            { cards != false ? cards?.map((card:CardTableType) => (
              <div
                className="sm:w-1/3 md:w-1/3 xl:w-1/4 w-full p-4 bg-white border border-2 rounded-lg shadow"
            style={{ borderBottomColor: card.categories_title }}
            key={card.id} >
            <div>
              <h5 className="text-xl font-medium text-gray-900">
                {card.title}
              </h5>
              <span className="block mb-2 text-sm font-small text-gray-900">
                {card.categories_title} Category
              </span>
            </div>
            <div className='flex flex-row justify-between'>
              <div className="text-sm font-medium text-gray-500 ">
                Revision {card.revision}
              </div>
              <div className="text-sm font-medium text-gray-500 ">
                Date  
              </div>
            </div>
          </div>

            )): <h1>There is no card with this terms</h1>}
        </div>
      </div>}
      </div>
    </div>
  );
}
