import { fetchCardByWord } from '@/app/lib/data';
import CardTable from '../card/cards';


export default async function CardsTable({
  query
}: {
  query: string;
}) {

  const cards = await fetchCardByWord(query);

  return (
    <div className="mt-6 mb-6 w-full">
      {cards &&
        <div className="flex flex-row flex-wrap justify-center gap-2 col-3">
            { cards != null ?  <CardTable card={cards} title={''}></CardTable>

            : <h1>There is no card with this terms</h1>}
      </div>
      }

     
    </div>
  );
}
