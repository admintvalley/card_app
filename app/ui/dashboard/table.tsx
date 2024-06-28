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
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {cards?.map((cards:CardTableType) => (
              <div
                key={cards.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                     
                      <p>{cards.title}</p>
                    </div>
                    <p className="text-sm text-gray-500">{cards.category_id}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {cards.description_front}
                    </p>
                    <p>{cards.description_back}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
