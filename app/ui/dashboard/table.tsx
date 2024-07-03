import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchCardByWord, fetchFilteredInvoices } from '@/app/lib/data';
import { CardTableType } from '@/app/lib/definitions';
import CardTable from '../card/cards';


export default async function CardsTable({
  query
}: {
  query: string;
}) {

  const cards = await fetchCardByWord(query);
  const title = cards.categories_title;

  return (
    <div className="mt-6 mb-6 w-full">
      {cards &&
        <div className="flex flex-row flex-wrap justify-center gap-2 col-3">
            { cards != false ?  <CardTable card={cards} title={''}></CardTable>

            : <h1>There is no card with this terms</h1>}
      </div>
      }

     
    </div>
  );
}
