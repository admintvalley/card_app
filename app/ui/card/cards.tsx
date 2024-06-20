import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import {CardTableType} from '@/app/lib/definitions';
import './style.css'
export default async function CardTable({
  card,
}: {
  card: CardTableType[];
}) {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Cards
      </h1>
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0">
                {card?.map((card) => (
                  <div
                    key={card.id}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <div className="flex items-center gap-3">
                            <p>{card.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                    <div className="pt-4 text-sm">
                      <p className='sl'>{card.description}</p>
                    </div>
                  </div>
                ))}         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
