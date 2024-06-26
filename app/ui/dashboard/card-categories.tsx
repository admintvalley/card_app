import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardCategories } from '@/app/lib/data';
import { RedirectToCategory } from './buttons';

export default async function CardCategories() { // Remove props
  const CardCategories = await fetchCardCategories();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h4 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Card Categories
      </h4>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 items-center">
          {CardCategories.map((category:any, i:number) => {
            return (
              <div
                key={category.id} className='flex flex-row justify-center py-4 px-2'
              >

                    <div className=" rounded overflow-hidden shadow-lg border border-b-2 border-solid"
                    style={{ borderBottomColor: category.title }}>
                      <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2"  style={{ color: category.title }}>{ category.title }</div>
                        <p className="text-gray-700 text-base">
                          Heres go a desription of the category
                        </p>
                      </div>

                      <div className="flex justify-center"> 
                      <RedirectToCategory title={category.title} /></div>
                      
                    </div>
              </div>
            );
          })}
        </div>
    </div>
  );
}
