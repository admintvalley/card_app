import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardCategories } from '@/app/lib/data';

export default async function CardCategories() { // Remove props
  const CardCategories = await fetchCardCategories();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h4 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Card Categories
      </h4>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
          {CardCategories.map((category, i) => {
            return (
              <div
                key={category.category_id} className='flex flex-row items-center justify-between py-4 px-2'
              >
                <div className="fle">

                  <div className="min-w-0">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-b-2 border-solid"
                    style={{ borderColor: category.title }}>
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2"  style={{ color: category.title }}>{ category.title }</div>
                        <p className="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla.
                        </p>
                      </div>
                      <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    </div>
  );
}
